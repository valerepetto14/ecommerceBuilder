import NextLink from "next/link";
import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import clsx from "clsx";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
}

export const SidebarItem = ({
  onClick,
  icon,
  title,
  isActive,
  href = "",
}: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };
  return (
    <NextLink
      href={href}
      className="text-default-900 active:bg-none max-w-full"
      onClick={onClick}
    >
      <div
        className={clsx(
          isActive
            ? "bg-indigo-600 [&_svg_path]:fill-primary-500 text-white"
            : "hover:bg-default-100",
          "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-md cursor-pointer transition-all duration-150 active:scale-[0.98]"
        )}
        onClick={handleClick}
      >
        {icon}
        <span className="text-sm">{title}</span>
      </div>
    </NextLink>
  );
};
