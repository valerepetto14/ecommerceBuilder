import { ReactElement } from "react";
import Link from "next/link";

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
  return (
    <Link href={href}>
      <div className="relative flex gap-4 items-center shadow-md rounded-lg px-2 py-3 bg-white hover:scale-105 transition-all">
        <div className="flex items-center justify-center w-12 h-12 bg-default-100 rounded-md">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-sm text-default-500">{description}</p>
        </div>
        <div className="absolute top-2 right-3 flex gap-2 items-center">
          {isActiveService ? (
            <>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <h3 className="text-xs">Activo</h3>
            </>
          ) : (
            <>
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <h3 className="text-xs">Desactivado</h3>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ServiceItem;
