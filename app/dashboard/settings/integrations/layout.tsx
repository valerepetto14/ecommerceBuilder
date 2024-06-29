import Link from "next/link";
import React from "react";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import { AiFillProduct } from "react-icons/ai";
import ServiceItem from "@/components/integrations/serviceItem";
import { ShopifyIcon, WhatsappIcon, WoocommerceIcon } from "@/components/icons";
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
      <span>Integraciones</span>
      <span> / </span>{" "}
    </li>
  </ul>
);

const IntegrationsPage = ({ children }: Props) => {
  return (
    <div className="mt-10 max-w-[99rem] mx-auto w-full flex flex-col gap-4">
      <Navigation />
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Integraciones</h1>
        <p className="text-default-500">
          Conecta con los servicios que ya usas para mejorar tu experiencia.
        </p>
      </div>
      <div className="w-full">
        <div className="w-full flex mt-10">
          <div className="flex flex-col gap-4 flex-2 px-5">
            <ServiceItem
              isActiveService={true}
              href="/dashboard/settings/integrations/shopify"
              title="Shopify"
              description="Conecta tu tienda de Shopify con tu cuenta."
              icon={<ShopifyIcon className="bg-white" />}
            />
            <ServiceItem
              isActiveService={false}
              href="/dashboard/settings/integrations/woocommerce"
              title="WooCommerce"
              description="Conecta tu tienda de Woocommerce con tu cuenta."
              icon={<WoocommerceIcon className="bg-white" />}
            />
            <ServiceItem
              isActiveService={false}
              href="/dashboard/settings/integrations/whatsapp"
              title="WhatsApp"
              description="Conecta con WhatsApp para empezar a usar el bot."
              icon={<WhatsappIcon className="bg-white" />}
            />
          </div>
          <div className="flex flex-1 px-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPage;
