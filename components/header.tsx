import {
  useMantineColorScheme,
  Header,
  ActionIcon,
  Flex,
  Title,
} from "@mantine/core";
import { IconSun, IconMoonStars, IconNote } from "@tabler/icons-react";

export default function HeaderContainer() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Header height={70} p="xs">
      <Flex
        direction={{ base: "row", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify={{ md: "space-between" }}
        align={{ base: "sm", sm: "center" }}>
        <Title gradient={{ from: "blue", to: "violet" }} variant="gradient">
          NoteBook {<IconNote size="1.7rem" />}
        </Title>
        <ActionIcon
          variant="outline"
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme">
          {dark ? <IconSun /> : <IconMoonStars />}
        </ActionIcon>
      </Flex>
    </Header>
  );
}
