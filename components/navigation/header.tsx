import SessionButton from "../buttons/session-button";

export default function Header() {
  return (
    <header className="sticky justify-between top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold">Playground</h1>
      <SessionButton />
    </header>
  );
}
