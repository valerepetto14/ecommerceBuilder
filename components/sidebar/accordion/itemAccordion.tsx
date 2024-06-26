import { usePathname } from "next/navigation";

export interface ItemAccordion {
  href: string;
  title: string;
  isActive: boolean;
}

const ItemAccordion = ({ href, title, isActive }: ItemAccordion) => {
  return (
    <li
      className={`${
        isActive
          ? "border-l-4 border-indigo-600"
          : "border-indigo-300 border-l-2"
      } hover:${
        isActive ? "" : "hover:border-l-3 hover:border-indigo-500"
      }  p-2`}
    >
      <a
        className={`ml-2 text-sm ${
          isActive ? "font-semibold text-indigo-600" : ""
        }`}
        href={href}
      >
        {title}
      </a>
    </li>
  );
};

export default ItemAccordion;
