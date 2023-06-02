import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import { AuthenticationTitle } from "./login";

export function LoginModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <AuthenticationTitle />
      </Modal>

      <Group position="center">
        <Button onClick={open}>Login</Button>
      </Group>
    </>
  );
}
