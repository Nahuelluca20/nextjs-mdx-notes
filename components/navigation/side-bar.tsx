import {
  Book,
  Code2,
  LifeBuoy,
  ScrollText,
  Settings2,
  SquareTerminal,
  SquareUser,
  Triangle,
} from "lucide-react";
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

const Links = [
  {href: "", name: "Playground", icon: <SquareTerminal className="size-5" />},
  {href: "notes", name: "Notes", icon: <ScrollText className="size-5" />},
  {href: "sarasa", name: "API", icon: <Code2 className="size-5" />},
  {href: "sarasa", name: "Documentation", icon: <Book className="size-5" />},
  {href: "sarasa", name: "Settings", icon: <Settings2 className="size-5" />},
];

export default function SideBar() {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b flex justify-center items-center  h-[53px]">
        <Button aria-label="Home" size="icon" variant="outline">
          <Triangle className="size-5 fill-foreground" />
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        {Links.map(({name, icon, href}) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <Button asChild aria-label={name} className="rounded-lg" size="icon" variant="ghost">
                <Link href={`/dashboard/${href}`}>{icon}</Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              {name}
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button aria-label="Help" className="mt-auto rounded-lg" size="icon" variant="ghost">
              <LifeBuoy className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Help
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button aria-label="Account" className="mt-auto rounded-lg" size="icon" variant="ghost">
              <SquareUser className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Account
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
