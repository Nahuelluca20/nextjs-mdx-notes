"use client";
import {useEffect} from "react";
import prism from "prismjs";
import Markdoc, {RenderableTreeNodes} from "@markdoc/markdoc";
import React from "react";

import {components} from "@/utils/config.markdoc";

export default function MdxRender({content}: {content: RenderableTreeNodes}) {
  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <div className="w-full lg:min-w-[500px] lg:max-w-[400px] mx-auto prose prose-sm">
      {Markdoc.renderers.react(content, React, {components})}
    </div>
  );
}
