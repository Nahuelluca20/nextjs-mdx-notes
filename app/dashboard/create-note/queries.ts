"use server";

import {z} from "zod";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

import {db} from "@/db";
import {note} from "@/db/schema/note";
import {auth, signIn} from "@/auth/auth";

export const createNote = async (formData: FormData) => {
  const session = await auth();
  const createNoteSchema = z.object({
    title: z.string().min(5).max(30),
    description: z.string().min(5).max(50),
    tags: z.string().min(5).max(20),
    content: z.string().min(5),
  });

  const validateSchema = createNoteSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    tags: formData.get("tags"),
    content: formData.get("content"),
  });

  if (!validateSchema.success) {
    validateSchema.error;
  } else if (!session?.userId) {
    return await signIn();
  } else {
    const result = await db
      .insert(note)
      .values({
        title: validateSchema.data.title,
        description: validateSchema.data.description,
        tags: validateSchema.data.tags,
        content: validateSchema.data.content,
        userId: String(session?.userId),
      })
      .returning({id: note.id});

    revalidatePath("/dashboard/notes");

    return redirect(`/dashboard/notes/${result[0].id}`);
  }
};
