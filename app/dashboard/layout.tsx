import React from "react";

import SideBar from "@/components/navigation/side-bar";
import Header from "@/components/navigation/header";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <main color-scheme="ligth">
      <SideBar />
      <div className="pl-[53px]">
        <Header />
        <div className="grid w-full p-4">{children}</div>
      </div>
    </main>
  );
}
