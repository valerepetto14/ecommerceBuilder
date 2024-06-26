import { ReactElement } from "react";
import { SidebarItem } from "../sidebar-item";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

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
    <div className="relative flex flex-col">
      <div className="absolute top-3 right-4">
        {isActive ? (
          <MdKeyboardArrowUp className="text-white text-lg cursor-pointer" />
        ) : (
          <MdKeyboardArrowDown className="text-lg cursor-pointer" />
        )}
      </div>
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
