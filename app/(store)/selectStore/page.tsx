"use client";
import { Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import ProfileDropDown from "@/components/store/Profile-Dropdown";

const SelectStorePage = () => {
  return (
    <section className="w-1/4 h-[700px] bg-white rounded-xl shadow-xl p-10">
      <div className="h-20 w-full flex justify-between">
        <h1 className="text-2xl font-bold text-center text-indigo-600">
          EcommerceBuilder
        </h1>
        <ProfileDropDown />
      </div>
      <div className="flex h-10 justify-between items-center">
        <h2 className="">Es un placer tenerte aqui!</h2>
        <Link href="/createStore">
          <Button
            className="bg-indigo-600 hover:bg-blue-800 text-white hover:scale-105 transition-all shadow-xl"
            radius="sm"
          >
            Crear tienda
          </Button>
        </Link>
      </div>
      {/* Store list if they dont have any store render "parece que no tenes ninguna tienda" */}
      <div className="w-full mt-20">
        <h3 className="text-center text-gray-300">
          Parece que no tenes ninguna tienda
        </h3>
      </div>
    </section>
  );
};

export default SelectStorePage;
