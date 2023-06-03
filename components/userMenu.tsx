import { Menu } from "@mantine/core";
import { signOut } from "next-auth/react";
import React from "react";
import { User } from "./user";
import { IconLogout } from "@tabler/icons-react";

const UserMenu = () => {
  return (
    <Menu shadow="md" width={200}>
      <>
        <User />

        <Menu.Dropdown>
          <Menu.Item icon={<IconLogout size={14} />} onClick={() => signOut()}>
            Log out
          </Menu.Item>
        </Menu.Dropdown>
      </>
    </Menu>
  );
};

export default UserMenu;
