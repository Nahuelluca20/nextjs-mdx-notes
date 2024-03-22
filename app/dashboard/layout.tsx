import React from "react";

import SideBar from "@/components/navigation/side-bar";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <main>
      <SideBar />
      {children}
    </main>
  );
}
