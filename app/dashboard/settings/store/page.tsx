import Link from "next/link";
import React from "react";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import { AiFillProduct } from "react-icons/ai";
import ServiceItem from "@/components/integrations/serviceItem";

interface Props {
  children: React.ReactNode;
}

const Navigation = () => (
  <ul className="flex">
    <li className="flex gap-2">
      <HouseIcon />
      <Link href={"/dashboard"}>
        <span>Dashboard</span>
      </Link>
      <span> / </span>{" "}
    </li>

    <li className="flex items-center gap-2">
      <AiFillProduct className="text-xl text-gray-400 ml-2" />
      <span>Configuraciones</span>
      <span> / </span>{" "}
    </li>

    <li className="flex items-center gap-2">
      <AiFillProduct className="text-xl text-gray-400 ml-2" />
      <span>Tienda</span>
      <span> / </span>{" "}
    </li>
  </ul>
);

const IntegrationsPage = ({ children }: Props) => {
  return (
    <div className="mt-10 max-w-[99rem] mx-auto w-full flex flex-col gap-4">
      <Navigation />
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Tienda</h1>
        <p className="text-default-500">
          Configura tu tienda para empezar a vender.
        </p>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default IntegrationsPage;
