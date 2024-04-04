import {eq} from "drizzle-orm";
import {z} from "zod";
import {cache} from "react";

import {db} from "@/db";
import {note} from "@/db/schema/note";

export const getNoteById = cache(async (userId: string) => {
  const getNoteByIdSchema = z.object({
    userId: z.string(),
  });
  const vadidateSchema = getNoteByIdSchema.safeParse({userId});

  if (!vadidateSchema.success) {
    vadidateSchema.error;
  } else {
    try {
      const result = await db
        .select({
          content: note.content,
          title: note.title,
          description: note.description,
        })
        .from(note)
        .where(eq(note.id, userId));

      return result[0];
    } catch (error) {
      console.error(error);
    }
  }
});
