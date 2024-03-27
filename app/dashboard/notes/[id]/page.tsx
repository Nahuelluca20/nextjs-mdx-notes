import React from "react";
import Markdoc from "@markdoc/markdoc";

import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {components, config} from "@/lib/config.markdoc";
import {extractHeadings} from "@/lib/extract-headings";
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
    <Card className="w-full md:max-w-[320px] lg:max-w-[400px]">
      <CardHeader>
        <CardTitle>Nota</CardTitle>
        <div className="flex flex-wrap gap-1 pt-2">
          <Badge>fetch</Badge>
          <Badge>API</Badge>
          <Badge>cache</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p>{params.id}</p>
        <TableOfContents tableOfContents={tableOfContents} />
        {Markdoc.renderers.react(content, React, {components})}
      </CardContent>
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
  );
}
