import React from "react";

import SideBar from "@/components/navigation/side-bar";
import Header from "@/components/navigation/header";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <main>
      <SideBar />
      <div className="pl-[53px]">
        <Header />
        <div className="grid h-screen w-full">{children}</div>
      </div>
    </main>
  );
}
