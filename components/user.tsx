import React from "react";
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
  rem,
  Menu,
} from "@mantine/core";
import { useSession } from "next-auth/react";

export const User = () => {
  const theme = useMantineTheme();
  const { data: session } = useSession();
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
      <UnstyledButton
        sx={{
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        }}>
        <Menu.Target>
          <Group>
            <Avatar src={session?.user?.image} radius="xl" />
            <Box sx={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                {session?.user?.name}
              </Text>
            </Box>
          </Group>
        </Menu.Target>
      </UnstyledButton>
    </Box>
  );
};
