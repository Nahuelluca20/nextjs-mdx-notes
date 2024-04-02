import {z} from "zod";

export const getNoteByIdSchema = z.object({
  userId: z.string(),
});
