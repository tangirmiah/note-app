import { Navbar } from "@mantine/core";
import { LoginModal } from "./loginModal";
import { useSession } from "next-auth/react";
import UserMenu from "./userMenu";

export default function NavbarContainer() {
  const { data: session } = useSession();
  return (
    <Navbar p="xs" width={{ base: 300 }}>
      <Navbar.Section>{session ? <UserMenu /> : <LoginModal />}</Navbar.Section>
      <Navbar.Section grow mt="md">
        {session ? <h1>main</h1> : null}
      </Navbar.Section>
    </Navbar>
  );
}
