import React from "react";

import SideBar from "@/components/navigation/side-bar";
import Header from "@/components/navigation/header";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <main>
      <SideBar />
      <div className="pl-[53px]">
        <div className="grid h-screen w-full">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
}
