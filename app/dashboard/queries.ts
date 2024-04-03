"use server";
import {redirect} from "next/navigation";
import {z} from "zod";

export const moveCreateNoteForm = async (formData: FormData) => {
  const createNoteSchema = z.object({
    title: z.string().min(5).max(30),
    description: z.string().min(5).max(50),
    tags: z.string().min(5).max(20),
  });

  const vadidateSchema = createNoteSchema.safeParse({
    title: String(formData.get("title")),
    description: String(formData.get("description")),
    tags: String(formData.get("tags")),
  });

  if (!vadidateSchema.success) {
    vadidateSchema.error;
  } else {
    return redirect(
      `/dashboard/create-note?title=${vadidateSchema.data.title}&tags=${vadidateSchema.data.tags}&description=${vadidateSchema.data.description}`,
    );
  }
};
