import type {Metadata} from "next";

import {Inter as FontSans} from "next/font/google";
import "./globals.css";

import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/providers/theme-provider";
import {TooltipProvider} from "@/components/ui/tooltip";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MDX Notes",
  description:
    "Create your MDX Notes with NextJS, Shadcn/ui, Markdoc, Drizzle ORM, Turso and authjs/next-auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
