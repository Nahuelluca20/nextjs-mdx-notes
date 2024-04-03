import Link from "next/link";

import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="text-center flex min-h-screen flex-col items-center gap-8 p-10 md:p-24">
        <h1 className="text-5xl font-bold">MDX Notes</h1>
        <h3 className="max-w-[600px] text-xl text-muted-foreground font-semibold">
          This is an app for creating MDX Notes. It is built with NextJS, Shadcn/ui, Markdoc,
          Drizzle ORM, Turso as database and authjs/next-auth for authentication.
        </h3>
        <div className="space-x-2">
          <Button asChild>
            <Link href="/dashboard">Go to Create</Link>
          </Button>
          <Button asChild variant={"secondary"}>
            <Link href="https://github.com/Nahuelluca20/nextjs-mdx-notes" target="_blank">
              See Code
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
}
