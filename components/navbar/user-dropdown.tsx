import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
  DropdownSection,
} from "@nextui-org/react";
import React from "react";
import { DarkModeSwitch } from "./darkmodeswitch";
import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";
import useSession from "../hooks/useSession";
import { useRouter } from "next/navigation";

export const UserDropdown = () => {
  const user = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
  };

  const handleProfile = () => {
    router.push("/dashboard/profile");
  };

  return (
    <Dropdown className="" backdrop="blur">
      <NavbarItem>
        <DropdownTrigger>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">{user?.name}</p>
            <Avatar
              as="button"
              size="md"
              className="bg-white border-1 border-indigo-600"
              src={user?.img !== null ? user?.img : "./img/notProfileImage.png"}
            />
          </div>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        className="rounded-sm"
        aria-label="User menu actions"
        onAction={(actionKey) => console.log({ actionKey })}
      >
        <DropdownItem
          key="profile"
          className="flex flex-col justify-start w-full items-start"
        >
          <p>Logueado con:</p>
          <p>{user?.email}</p>
        </DropdownItem>
        <DropdownSection showDivider title="Dark mode">
          <DropdownItem key="switch">
            <DarkModeSwitch />
          </DropdownItem>
        </DropdownSection>
        <DropdownItem
          key="profile"
          color="default"
          className="text-default-900"
          onClick={handleProfile}
        >
          Ir a perfil
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          className="text-danger"
          onClick={handleSignOut}
        >
          Salir
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
