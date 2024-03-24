"use client";

import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";

export function ModeToggle() {
  const {theme, setTheme} = useTheme();

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="h-[1.2rem] w-[1.2rem] ">
        <Sun className="hidden dark:block h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        <Moon className="dark:hidden absolute h-[1.2rem] w-[1.2rem] transition-all dark:rotate-0 scale-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
