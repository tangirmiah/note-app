import { Button, Group, Navbar } from "@mantine/core";
import { LoginModal } from "./loginModal";
import { signOut, useSession } from "next-auth/react";

export default function NavbarContainer() {
  const { data: session } = useSession();
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section grow mt="md">
        <h1>main</h1>
      </Navbar.Section>
      <Navbar.Section>
        {session ? (
          <Group position="center">
            <Button onClick={() => signOut()}>Log out</Button>
          </Group>
        ) : (
          <LoginModal />
        )}
      </Navbar.Section>
    </Navbar>
  );
}
