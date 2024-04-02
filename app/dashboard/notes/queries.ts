"use server";

import {eq} from "drizzle-orm";
import {z} from "zod";
import {revalidatePath} from "next/cache";

import {db} from "@/db";
import {action} from "@/lib/safe-action";
import {note} from "@/db/schema/note";

const getNoteByIdSchema = z.object({
  userId: z.string(),
});

export const getNotes = async () => {
  const result = await db
    .select({
      id: note.id,
      title: note.title,
      description: note.description,
      tags: note.tags,
      userId: note.userId,
    })
    .from(note);

  return result;
};

export const getNoteById = action(getNoteByIdSchema, async ({userId}) => {
  const result = await db
    .select({
      content: note.content,
    })
    .from(note)
    .where(eq(note.id, userId));

  return result[0];
});

export const deleteNote = async (formData: FormData) => {
  const deleteNoteSchema = z.object({
    userId: z.string(),
    noteUserId: z.string(),
    noteId: z.string(),
  });

  const data = deleteNoteSchema.parse({
    userId: formData.get("userId"),
    noteUserId: formData.get("noteUserId"),
    noteId: formData.get("noteId"),
  });

  if (data.userId !== data.noteUserId) {
    throw new Error("You can only delete your own notes");
  } else {
    await db.delete(note).where(eq(note.id, data.noteId));

    return revalidatePath("/dashboard/notes");
  }
};
