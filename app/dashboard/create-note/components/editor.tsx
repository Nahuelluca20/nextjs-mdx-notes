"use client";
import {useState} from "react";
import React from "react";
import {Eye} from "lucide-react";
import {useSearchParams} from "next/navigation";

import {ScrollArea} from "@/components/ui/scroll-area";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Card, CardContent} from "@/components/ui/card";
import {parseMdx} from "@/utils/parse-mdx";
import "@/app/dashboard/styles/mdx.css";
import MdxRender from "@/components/markdoc/mdx-render";

import {createNote} from "../queries";

export default function Editor() {
  const [mdxContent, setMdxContent] = useState<string>("");
  const searchParams = useSearchParams();
  const [open, setOpen] = useState<boolean>(false);
  const content = parseMdx(mdxContent);

  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const tags = searchParams.get("tags");

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Create Note</h1>
        <Sheet>
          <Button
            asChild
            className="lg:hidden ml-auto gap-1.5 text-sm"
            size="sm"
            variant="outline"
            onClick={() => setOpen(!open)}
          >
            <SheetTrigger>
              <Eye className="size-3.5" />
              Preview
            </SheetTrigger>
          </Button>
          <SheetContent className="lg:hidden min-h-[500px] w-full" side={"bottom"}>
            <ScrollArea className="h-[500px] w-full rounded-md border p-3 mt-4">
              <MdxRender content={content} />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      <div className="gap-4 flex flex-col lg:flex-row items-start mt-2">
        <form action={createNote} className="grid gap-2 w-full md:max-w-full lg:max-w-[800px]">
          <input id="description" name="description" type="hidden" value={String(description)} />
          <input id="tags" name="tags" type="hidden" value={String(tags)} />
          <input id="title" name="title" type="hidden" value={String(title)} />

          <Textarea
            className="min-h-[500px] w-full max-w-screen"
            id="content"
            name="content"
            placeholder="Type your note here"
            value={mdxContent}
            onChange={(e) => setMdxContent(e.target.value)}
          />
          <Button className="w-24">Submit</Button>
        </form>

        <Card className="hidden lg:block w-full h-full md:min-h-[500px]">
          <CardContent className="w-full py-2">
            <MdxRender content={content} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
