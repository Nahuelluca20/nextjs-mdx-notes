"use server";

// import {eq} from "drizzle-orm";

import {db} from "@/db";
// import {note} from "@/db/schema/note";

export const getNotes = async () => {
  const notes = await db.query.note.findMany();

  return notes;
};
