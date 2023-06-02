import { useMantineColorScheme, Header, ActionIcon } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export default function HeaderContainer() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Header height={90} p="xs">
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme">
        {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
      </ActionIcon>
    </Header>
  );
}
