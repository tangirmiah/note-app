import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Box, rem, useMantineTheme, Group } from "@mantine/core";
import { AuthenticationTitle } from "./login";

export function LoginModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  return (
    <Box
      sx={{
        paddingBottom: theme.spacing.sm,
        borderBottom: `${rem(1)} solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <AuthenticationTitle />
      </Modal>
      <Group>
        <Button
          sx={{
            minHeight: "3rem",
            display: "block",
            width: "100%",
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color: theme.white,

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.black,
            },
          }}
          onClick={open}>
          Login
        </Button>
      </Group>
    </Box>
  );
}
