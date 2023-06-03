"use client";
import React from "react";
import HeaderContainer from "@/components/header";
import NavbarContainer from "@/components/navbar";
import { AppShell } from "@mantine/core";
export default function AppShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell header={<HeaderContainer />} navbar={<NavbarContainer />}>
      {children}
    </AppShell>
  );
}
