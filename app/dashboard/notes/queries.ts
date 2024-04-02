"use server";

import {eq} from "drizzle-orm";
import {z} from "zod";

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
      title: note.title,
      description: note.description,
      content: note.content,
      tags: note.tags,
      userId: note.userId,
    })
    .from(note)
    .where(eq(note.id, userId));

  return result[0];
});
