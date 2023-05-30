"use client";
import { AuthenticationTitle } from "@/components/login";
import { AppShell, Header, Navbar } from "@mantine/core";
export default function Home() {
  return (
    <main>
      <AppShell
        header={
          <Header height={90} p="xs">
            <h2>NoteBook</h2>
          </Header>
        }
        navbar={
          <Navbar width={{ base: 350 }} height="100vh" p="xs">
            <AuthenticationTitle />
          </Navbar>
        }>
        hello
      </AppShell>
    </main>
  );
}
