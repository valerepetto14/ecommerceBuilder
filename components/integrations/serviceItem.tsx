"use client";
import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: ReactElement;
  href: string;
  isActiveService: boolean;
}

const ServiceItem = ({
  title,
  description,
  icon,
  href,
  isActiveService,
}: ServiceItemProps) => {
  const pathname = usePathname();

  const statusClassNames = isActiveService ? "bg-green-500" : "bg-red-500";
  const statusText = isActiveService ? "Activo" : "Desactivado";

  return (
    <Link href={href}>
      <div
        className={clsx(
          "relative flex gap-4 items-center shadow-md rounded-md px-2 py-3 bg-white transition-all border-l-4",
          {
            "hover:border-indigo-300": pathname !== href,
            "border-indigo-600 scale-105 ": pathname === href,
            "border-transparent": pathname !== href,
          }
        )}
      >
        <div className="flex items-center justify-center w-12 h-12 bg-default-100 rounded-md">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-sm text-default-500">{description}</p>
        </div>
        <div className="absolute top-2 right-3 flex gap-2 items-center">
          <div className={`h-2 w-2 rounded-full ${statusClassNames}`}></div>
          <h3 className="text-xs">{statusText}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiceItem;
