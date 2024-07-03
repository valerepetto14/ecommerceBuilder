"use client";
import { usePathname, useRouter } from "next/navigation";
import Tabs from "./tabs";
import React from "react";
const tabs = [
  {
    href: "/dashboard/profile/information",
    title: "Informacion personal",
  },
  {
    href: "/dashboard/profile/security",
    title: "Seguridad",
  },
  {
    href: "/dashboard/profile/contact",
    title: "Contacto",
  },
];

const tabItems = [
  { label: "Informacion personal", path: "/dashboard/profile/information" },
  { label: "Seguridad", path: "/dashboard/profile/security" },
  { label: "Contacto", path: "/dashboard/profile/contact" },
];

const TabNavigationProfile = () => {
  const router = useRouter();
  const handleTabClick = (path: string) => {
    router.push(path);
  };
  const pathname = usePathname();
  return (
    <Tabs items={tabItems} activePath={pathname} onTabClick={handleTabClick} />
  );
};

export default TabNavigationProfile;
