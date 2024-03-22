import {drizzle} from "drizzle-orm/libsql";
import {createClient} from "@libsql/client";

const client = createClient({url: "DATABASE_URL", authToken: "DATABASE_AUTH_TOKEN"});

export const db = drizzle(client, {
  schema: {
    // Define your schema here
  },
  // Define your options here
});
