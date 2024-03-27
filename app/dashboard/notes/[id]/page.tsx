import React from "react";
import Markdoc from "@markdoc/markdoc";

import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {components, config} from "@/lib/config.markdoc";
import {extractHeadings} from "@/lib/extract-headings";
import TableOfContentsPopOver from "@/components/markdoc/table-of-contents-popover";
import TableOfContents from "@/components/markdoc/table-of-contents";

export default function Page({params}: {params: {id: string}}) {
  const contentMDX = `
  # Markdoc

  Markdoc is a markdown parser and renderer for React. It is designed to be highly customizable and extensible.
  - It supports custom components and attributes.

  > This is a blockquote

  ## Markdoc 2

  Markdoc is a markdown parser and renderer for React. It is designed to be highly customizable and extensible.
  - It supports custom components and attributes.

  > This is a blockquoteMarkdoc is a markdown parser and renderer for React. It is designed to be highly customizable and extensible.
  - It supports custom components and attributes.

  > This is a blockquoteMarkdoc is a markdown parser and renderer for React. It is designed to be highly customizable and extensible.
  - It supports custom components and attributes.

  > This is a blockquoteMarkdoc is a markdown parser and renderer for React. It is designed to be highly customizable and extensible.
  - It supports custom components and attributes.

  > This is a blockquote


  # Markdoc4
  `;
  const ast = Markdoc.parse(contentMDX);
  const content = Markdoc.transform(ast, config);
  const tableOfContents = extractHeadings(content);

  return (
    <section className="flex gap-8">
      <Card className="w-full md:max-w-full lg:max-w-[800px]">
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between">
            <CardTitle>Nota</CardTitle>
            <TableOfContentsPopOver tableOfContents={tableOfContents} />
          </div>
          <div className="flex flex-wrap gap-1 pt-2">
            <Badge>fetch</Badge>
            <Badge>API</Badge>
            <Badge>cache</Badge>
          </div>
        </CardHeader>
        <CardContent>{Markdoc.renderers.react(content, React, {components})}</CardContent>
        {/* <CardFooter className="gap-2 flex justify-end">
        <Button className="flex items-center justify-between gap-2" variant={"secondary"}>
          <Share className="size-3.5" />
          Share
        </Button>
        <Button>
          <Link href={"notes/saasa"}>Open</Link>
        </Button>
      </CardFooter> */}
      </Card>
      <TableOfContents tableOfContents={tableOfContents} />
    </section>
  );
}
