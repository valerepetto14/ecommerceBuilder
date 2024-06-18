import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProfileDropDown = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    signOut({
      redirect: false,
    }).then(() => {
      router.push("/signin");
    });
  };

  return (
    <Dropdown className="">
      <DropdownTrigger>
        <Avatar
          as="button"
          color="secondary"
          size="md"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User menu actions">
        <DropdownItem
          key="profile"
          className="flex flex-col justify-start w-full items-start"
        >
          <p>Signed in as</p>
          <p>zoey@example.com</p>
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          className="text-danger"
          onClick={handleSignOut}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropDown;
