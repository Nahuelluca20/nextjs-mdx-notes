import {Share} from "lucide-react";
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {auth} from "@/auth/auth";

export default async function NoteCard({
  title,
  description,
  tags,
  userId,
}: {
  title: string;
  description: string;
  tags: string;
  content: string;
  userId: string;
}) {
  const session = await auth();

  console.log(session);

  return (
    <Card className="w-full md:max-w-[320px] lg:max-w-[400px]">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex flex-wrap gap-1 pt-2">
          <Badge>fetch</Badge>
          <Badge>API</Badge>
          <Badge>cache</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="gap-2 flex justify-end">
        <Button disabled={userId !== session?.user.id} variant={"destructive"}>
          Delete
        </Button>
        <Button className="flex items-center justify-between gap-2" variant={"secondary"}>
          <Share className="size-3.5" />
          Share
        </Button>
        <Button asChild>
          <Link href={"notes/saasa"}>Open</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
