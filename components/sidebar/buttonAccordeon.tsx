import { ReactElement } from "react";
import { SidebarItem } from "./sidebar-item";

interface ButtonAccordeonProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
  icon: ReactElement;
}

const ButtonAccordeon = ({
  onClick,
  title,
  children,
  isActive,
  icon,
}: ButtonAccordeonProps) => {
  return (
    <div className="flex flex-col">
      <SidebarItem
        title={title}
        isActive={isActive}
        icon={icon}
        onClick={onClick}
      />
      {children}
    </div>
  );
};

export default ButtonAccordeon;
