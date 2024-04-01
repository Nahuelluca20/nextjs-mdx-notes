"use server";

import {db} from "@/db";

export const getNotes = async () => {
  const notes = await db.query.note.findMany({
    columns: {
      content: false,
    },
  });

  return notes;
};
