"use client";
import React, { ReactElement } from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import { AiFillProduct } from "react-icons/ai";
import { useState } from "react";
import ButtonAccordeon from "./buttonAccordeon";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();
  type CollapseOption = "settings" | "products" | "orders" | "customers";
  const [sideBarItemOpen, setSideBarItemOpen] = useState<CollapseOption | "">(
    ""
  );

  const handleCollapse = (option: CollapseOption) => {
    setSideBarItemOpen(sideBarItemOpen === option ? "" : option);
  };

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={pathname === "/"}
              href="/dashboard"
            />
            <SidebarMenu title="Menu">
              <SidebarItem
                isActive={pathname === "/dashboard/products"}
                title="Products"
                icon={<AiFillProduct className="text-2xl text-indigo-600" />}
                href="/dashboard/products"
              />
              <SidebarItem
                isActive={pathname === "/Orders"}
                title="Orders"
                icon={<PaymentsIcon />}
              />
              <SidebarItem
                isActive={pathname === "/customers"}
                title="Customers"
                icon={<CustomersIcon />}
              />
              <SidebarItem
                isActive={pathname === "/customers"}
                title="Customers"
                icon={<CustomersIcon />}
              />
              <ButtonAccordeon
                title="Configuracion"
                isActive={
                  sideBarItemOpen === "settings" ||
                  pathname.includes("settings")
                }
                onClick={() => handleCollapse("settings")}
                icon={<ProductsIcon />}
              >
                <SettingAccordion
                  open={
                    sideBarItemOpen === "settings" ||
                    pathname.includes("settings")
                  }
                />
              </ButtonAccordeon>
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Profile"} color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};

const SettingAccordion = ({ open }: { open: boolean }): ReactElement => {
  return (
    <ul
      className={`ml-3 bg-white w-3/3 flex flex-col   ${!open ? "hidden" : ""}`}
    >
      <ItemAccordion
        href="/dashboard/settings/integrations"
        title="Integraciones"
      />
      <ItemAccordion
        href="/dashboard/settings/notifications"
        title="Notifications"
      />
    </ul>
  );
};

interface ItemAccordion {
  href: string;
  title: string;
}

const ItemAccordion = ({ href, title }: ItemAccordion) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li
      className={`${
        isActive
          ? "border-l-4 border-indigo-600"
          : "border-indigo-300 border-l-2"
      } p-2`}
    >
      <a className="ml-2 text-sm" href={href}>
        {title}
      </a>
    </li>
  );
};
