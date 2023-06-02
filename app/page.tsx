"use client";

import HeaderContainer from "@/components/header";
import NavbarContainer from "@/components/navbar";
import { AppShell } from "@mantine/core";
export default function Home() {
  return (
    <main>
      <AppShell header={<HeaderContainer />} navbar={<NavbarContainer />}>
        hello
      </AppShell>
    </main>
  );
}
