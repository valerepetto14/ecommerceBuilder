"use client";
import { usePathname } from "next/navigation";
import { HouseIcon } from "./icons/breadcrumb/house-icon";

const Navigation = () => {
  const pathname = usePathname();
  const sections = pathname.split("/").filter((section) => section !== "");
  return (
    <ul className="flex items-center">
      <li className="flex items-center">
        <HouseIcon />
      </li>
      {sections.map((section, index) => (
        <li key={section} className="flex items-center gap-2">
          <span className="text-sm">{section}</span>
          {index < sections.length - 1 && (
            <span className="mr-2 text-sm">/</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
