import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

import {Button} from "../ui/button";

export default function TableOfContentsPopOver({tableOfContents}: any) {
  const items: any[] = tableOfContents.filter(
    (item: any) => item.level === 1 || item.level === 2 || item.level === 3,
  );

  return (
    <Popover>
      <Button asChild className="lg:hidden" variant={"outline"}>
        <PopoverTrigger>Table of content</PopoverTrigger>
      </Button>
      <PopoverContent align="end" className="lg:hidden">
        <div className="py-8 space-y-4">
          <div className="text-2xl font-semibold">Table of content</div>
          <ul className="pl-2 space-y-2 list-disc list-inside text-blue-500">
            {items.map((item) => {
              const href = `#${item.title}`;
              const active = typeof window !== "undefined" && window.location.hash === href;

              return (
                <li
                  key={item.title}
                  className={[
                    active ? "text-red-500" : undefined,
                    item.level === 2 ? "pl-4" : item.level === 3 ? "pl-10" : undefined,
                  ].join("")}
                >
                  <a href={href}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}
