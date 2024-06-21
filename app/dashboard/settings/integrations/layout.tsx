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
          Conecta tu tienda con tu cuenta para empezar a vender tus productos.
        </p>
      </div>
      <div className="w-full">
        <div className="w-full flex mt-10 gap-10">
          <div className="flex flex-col gap-4 py-2 flex-2">
            <ServiceItem
              isActiveService={true}
              href="/dashboard/settings/integrations/shopify"
              title="Shopify"
              description="Conecta tu tienda de Shopify con tu cuenta."
              icon={
                <svg
                  width="256"
                  height="292"
                  viewBox="0 0 256 292"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z"
                    fill="#95BF46"
                  />
                  <path
                    d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357"
                    fill="#5E8E3E"
                  />
                  <path
                    d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338"
                    fill="#FFF"
                  />
                </svg>
              }
            />
            <ServiceItem
              isActiveService={false}
              href="/dashboard/settings/integrations/woocommerce"
              title="WooCommerce"
              description="Conecta tu tienda de Woocommerce con tu cuenta."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={256}
                  height={292}
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#7f54b3"
                    d="M116.3 89.1H11.7C5.2 89.1 0 83.9 0 77.4v-40C0 31 5.2 25.8 11.7 25.8h104.7c6.4 0 11.7 5.2 11.7 11.7v40c-.1 6.4-5.3 11.6-11.8 11.6z"
                  />
                  <path
                    fill="#FFF"
                    d="M13.8 76.7s2.8 11.8 8.5 3.9 11.2-20.3 11.2-20.3.4-3.1 2 3.7S44 80 44 80s6.3 7.9 8.9-.4c-1-11 2.8-31 6.7-40.6 1.6-8.5-7.3-6.1-8.1-4.1s-6.3 14.8-6.7 28.2c0 0-4.7-12.8-5.1-17.4-.4-4.7-5.3-5.9-8.1-1.4S20.3 66.2 20.3 66.2l-5.5-28.4s-5.5-7.3-8.7 1.6c0 0 5.7 34.9 7.7 37.3zM87 45.7c-8.5-14.2-21.1-3.4-21.1-3.4s-9.6 11.1-5.3 26.2c6.9 14.9 16.6 8.3 19.2 7.1 2.7-1.3 14.1-14.3 7.2-29.9zm-6.5 12.5c0 5.9-4.9 11.4-8.9 10.2-2.2-1.3-3.6-4.8-3.6-10.8 2-9.7 6.4-11 8.7-10.8 4.3 2.3 4.1 7.4 3.8 11.4zM118.9 45.7c-8.5-14.2-21.1-3.4-21.1-3.4s-9.6 11.1-5.3 26.2c6.9 14.9 16.6 8.3 19.2 7.1 2.6-1.3 14.1-14.3 7.2-29.9zm-6.5 12.5c0 5.9-4.9 11.4-8.9 10.2-2.2-1.3-3.6-4.8-3.6-10.8 2-9.7 6.4-11 8.7-10.8 4.2 2.3 4 7.4 3.8 11.4z"
                  />
                  <path
                    fill="#7f54b3"
                    d="M61.3 89.1l22.3 13.1-4.7-13.1-12.8-3.6z"
                  />
                </svg>
              }
            />
          </div>
          <div className="flex flex-1 px-20">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPage;
