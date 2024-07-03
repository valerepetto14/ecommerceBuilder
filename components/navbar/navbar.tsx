import { Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { UserDropdown } from "./user-dropdown";
import { BurguerButton } from "./burguer-button";
interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent justify="end">
          <UserDropdown />
        </NavbarContent>
      </Navbar>
      <section className="p-2">{children}</section>
    </div>
  );
};
