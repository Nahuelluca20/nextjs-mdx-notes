import {drizzle} from "drizzle-orm/libsql";
import {createClient} from "@libsql/client";

import * as noteSchema from "./schema/note";

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, {schema: {...noteSchema}});
