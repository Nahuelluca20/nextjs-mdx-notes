"use client";
import {useEffect, useState} from "react";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import prism from "prismjs";

import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Card, CardContent} from "@/components/ui/card";
import {parseMdx} from "@/utils/parse-mdx";
import {components} from "@/utils/config.markdoc";

import "./mdx.css";
import {sendMdx} from "../queries";

export default function Editor() {
  const [mdxContent, setMdxContent] = useState<string>("");
  const content = parseMdx(mdxContent);

  console.log(mdxContent);

  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <div className="gap-4 flex items-start mt-2">
      <form action={sendMdx} className="grid gap-2 w-full md:max-w-full lg:max-w-[800px]">
        <Textarea
          className="min-h-[500px] "
          id="content"
          name="content"
          placeholder="Type your note here"
          onChange={(e) => setMdxContent(e.target.value)}
        />
        <Button className="w-24">Submit</Button>
      </form>
      <Card className="w-full h-full min-h-[500px]">
        <CardContent className="w-full py-2">
          <div className="lg:min-w-[800px] lg:max-w-[800px] mx-auto prose prose-sm">
            {Markdoc.renderers.react(content, React, {components})}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
