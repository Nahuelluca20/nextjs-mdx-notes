"use server";

import {eq} from "drizzle-orm";
import {z} from "zod";

import {db} from "@/db";
import {action} from "@/lib/safe-action";
import {note} from "@/db/schema/note";

export const createNote = async (formData: FormData) => {
  const createNoteSchema = z.object({
    // title: z.string(),
    // description: z.string(),
    // tags: z.string(),
    content: z.string(),
    // userId: z.string(),
  });

  const data = createNoteSchema.parse({
    // title: formData.get("title"),
    // description: formData.get("description"),
    // tags: formData.get("tags"),
    content: formData.get("content"),
    // userId: formData.get("userId"),
  });
  const result = await db.insert(note).values({
    title: "NextJS + Auth0: authenticate HTTP requests",
    description: "Sarasa Sarasa Sarasa Sarasa Sarasa",
    tags: "Auth0, NextJS, Tokes, JWT, Access Token",
    content: data.content,
    userId: "2c4d443a-c807-4049-9b73-379ead48fc4e",
  });

  return result;
};

export async function sendMdx(formData: FormData) {
  const rawFormData = {
    mdxContent: formData.get("content"),
  };

  return rawFormData.mdxContent;
}
