import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";

import {moveCreateNoteForm} from "./queries";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <main className="grid flex-1 gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3">
        <div className="relative flex-col items-start gap-8 md:flex">
          <form action={moveCreateNoteForm} className="grid w-full items-start gap-6">
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">Create Note</legend>
              <div className="grid gap-3">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" placeholder="Cache in NextJS" type="text" />
              </div>
              <div className="grid">
                <Label htmlFor="tags">tags</Label>
                <Input
                  className="mt-3"
                  id="tags"
                  name="tags"
                  placeholder="cache, nextjs, tailwind"
                  type="text"
                />
                <p className="pl-1 pt-1 text-xs md:text-sm font-medium text-muted-foreground">
                  Separate tags by commas. Max 3 tags.
                </p>
              </div>
              <div className="space-y-3">
                <Label htmlFor="description">Description</Label>

                <Textarea id="description" name="description" placeholder="write a description" />
              </div>
              <Button className="w-24" type="submit">
                Create Note
              </Button>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}
