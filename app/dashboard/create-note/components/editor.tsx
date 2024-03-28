"use client";
import {useState} from "react";
import Markdoc from "@markdoc/markdoc";
import React from "react";

import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Card, CardContent} from "@/components/ui/card";
import {parseMdx} from "@/utils/parse-mdx";
import {components} from "@/utils/config.markdoc";

import {sendMdx} from "../queries";

export default function Editor() {
  const [mdxContent, setMdxContent] = useState<string>("");
  const content = parseMdx(mdxContent);

  console.log(mdxContent);

  return (
    <div className="gap-4 flex">
      <form action={sendMdx} className="space-y-4 w-full md:max-w-full lg:max-w-[800px]">
        <Textarea
          className="min-h-[500px] "
          id="content"
          name="content"
          placeholder="Type your note here"
          onChange={(e) => setMdxContent(e.target.value)}
        />
        <Button>Submit</Button>
      </form>
      <Card className="w-full h-full min-h-[500px]">
        <CardContent className="w-full py-2">
          {Markdoc.renderers.react(content, React, {components})}
        </CardContent>
      </Card>
    </div>
  );
}
