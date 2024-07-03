"use client";
import { useRef, forwardRef } from "react";
import { motion } from "framer-motion";

interface ITabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = forwardRef<HTMLButtonElement, ITabProps>((props, ref) => {
  const { label, isActive, onClick } = props;
  return (
    <button
      type="button"
      ref={ref}
      className={`relative px-4 py-2 font-normal text-base hover:text-indigo-600 ${
        isActive ? "text-indigo-600" : "text-black"
      } focus:outline-none`}
      onClick={onClick}
    >
      {label}
      {isActive && (
        <span
          className="absolute bottom-0 left-0 right-0 bg-indigo-600"
          style={{ height: "3px", borderRadius: "20px" }}
        />
      )}
    </button>
  );
});

interface ITabItem {
  label: string;
  path: string;
}

interface ITabsProps {
  items: ITabItem[];
  activePath: string;
  onTabClick: (path: string) => void;
}

function Tabs({ items, activePath, onTabClick }: ITabsProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeTab = items.findIndex((item) => item.path === activePath);

  return (
    <div className="relative flex border-b-1">
      {items.map((item, index) => (
        <Tab
          key={item.label}
          label={item.label}
          isActive={index === activeTab}
          onClick={() => onTabClick(item.path)}
          ref={(el) => {
            tabRefs.current[index] = el;
          }}
        />
      ))}
      <motion.div
        className="absolute bottom-0 bg-indigo-600"
        layoutId="underline"
        initial={false}
        animate={{
          left: tabRefs.current[activeTab]?.offsetLeft,
          width: tabRefs.current[activeTab]?.offsetWidth,
          height: "2px",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  );
}

export default Tabs;
