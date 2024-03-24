import {Share} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NoteCard() {
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
        <p>Esto es una Decripcion</p>
      </CardContent>
      <CardFooter className="gap-2 flex justify-end">
        <Button className="flex items-center justify-between gap-2" variant={"secondary"}>
          <Share className="size-3.5" />
          Share
        </Button>
        <Button>Open</Button>
      </CardFooter>
    </Card>
  );
}
