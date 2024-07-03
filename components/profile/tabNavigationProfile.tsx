"use client";
import { usePathname } from "next/navigation";
import TabItem from "./tabNavigationItem";
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

const TabNavigationProfile = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap gap-4">
      <ul
        className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0"
        role="tablist"
        data-twe-nav-ref
      >
        {tabs.map((tab) => (
          <TabItem
            key={tab.title}
            href={tab.href}
            title={tab.title}
            isActive={pathname === tab.href}
          />
        ))}
      </ul>
    </div>
  );
};

export default TabNavigationProfile;
