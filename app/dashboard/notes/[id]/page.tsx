import React from "react";
import {Metadata} from "next";

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {extractHeadings} from "@/utils/extract-headings";
import TableOfContents from "@/components/markdoc/table-of-contents";
import "@/app/dashboard/styles/mdx.css";
import {parseMdx} from "@/utils/parse-mdx";
import MdxRender from "@/components/markdoc/mdx-render";
import TableOfContentsPopOver from "@/components/markdoc/table-of-contents-popover";

import {getNoteById} from "./queries";
type Props = {
  params: {id: string};
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const note = await getNoteById(params.id);

  return {
    title: note?.title || "MDX Notes",
    description:
      note?.description ||
      "Create your MDX Notes with NextJS, Shadcn/ui, Markdoc, Drizzle ORM, Turso and authjs/next-auth",
  };
}

export default async function Page({params}: {params: {id: string}}) {
  const note = await getNoteById(params.id);

  const content = await parseMdx(note?.content || "");

  const tableOfContents = extractHeadings(content);

  return (
    <section className="flex gap-4">
      <Card className="max-w-[300px] semi:max-w-[400px] sm:max-w-[500px] md:max-w-full lg:max-w-[600px] xl:max-w-[800px]">
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-end">
            <TableOfContentsPopOver tableOfContents={tableOfContents} />
          </div>
        </CardHeader>

        <CardContent>
          <MdxRender content={JSON.parse(JSON.stringify(content))} />
        </CardContent>
      </Card>
      <div className="relative">
        <TableOfContents tableOfContents={tableOfContents} />
      </div>
    </section>
  );
}
