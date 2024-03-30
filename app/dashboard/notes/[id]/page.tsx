import React from "react";
import Markdoc from "@markdoc/markdoc";

import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {components} from "@/utils/config.markdoc";
import {extractHeadings} from "@/utils/extract-headings";
import TableOfContentsPopOver from "@/components/markdoc/table-of-contents-popover";
import TableOfContents from "@/components/markdoc/table-of-contents";
import {parseMdx} from "@/utils/parse-mdx";

export default function Page({params}: {params: {id: string}}) {
  const contentMDX = `
  ## Saraa

  hola como estas

  ### tercer titlu


  ## dsadas

  # Priemro
  `;
  const content = parseMdx(contentMDX);
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
