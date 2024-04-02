import {text, sqliteTable} from "drizzle-orm/sqlite-core";
import {createId} from "@paralleldrive/cuid2";

import {users} from "./user";

export const note = sqliteTable("note", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  title: text("title"),
  description: text("description"),
  tags: text("tags"),
  content: text("content"),
  userId: text("userId")
    .notNull()
    .references(() => users.id, {onDelete: "cascade"}),
});
