import Link from "next/link";

import {ModeToggle} from "@/components/buttons/mode-toggle";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ModeToggle />
        <Link href="/dashboard">Dashboard</Link>
      </main>
    </>
  );
}
