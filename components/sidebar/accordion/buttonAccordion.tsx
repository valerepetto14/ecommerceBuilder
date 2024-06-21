import { ReactElement } from "react";
import { SidebarItem } from "../sidebar-item";

interface ButtonAccordionProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
  icon: ReactElement;
}

const ButtonAccordion = ({
  onClick,
  title,
  children,
  isActive,
  icon,
}: ButtonAccordionProps) => {
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

export default ButtonAccordion;
