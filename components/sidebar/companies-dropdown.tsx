"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { AcmeIcon } from "../icons/acme-icon";
import { AcmeLogo } from "../icons/acmelogo";
import { BottomIcon } from "../icons/sidebar/bottom-icon";
import { IoMdAdd } from "react-icons/io";

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

const companies = [
  {
    name: "Ecommerce 1",
    location: "Querétaro, México",
    logo: <AcmeIcon />,
  },
  {
    name: "Ecommerce 2",
    location: "Montevideo, Uruguay",
    logo: <AcmeLogo />,
  },
];

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>(companies[0]);
  return (
    <Dropdown
      classNames={{
        base: "w-full min-w-[260px]",
      }}
    >
      <DropdownTrigger className="cursor-pointer">
        <div className="flex items-center gap-2">
          {company.logo}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap">
              {company.name}
            </h3>
            <span className="text-xs font-medium text-default-500">
              {company.location}
            </span>
          </div>
          <BottomIcon />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        onAction={(e) => {
          if (e === "0") {
            setCompany({
              name: "Ecommerce 1",
              location: "Querétaro, México",
              logo: <AcmeIcon />,
            });
          }
          if (e === "1") {
            setCompany({
              name: "Ecommerce 2",
              location: "Montevideo, Uruguay",
              logo: <AcmeLogo />,
            });
          }
        }}
        aria-label="Avatar Actions"
      >
        <DropdownSection title="Companies">
          {companies.map((company, index) => (
            <DropdownItem
              key={index}
              startContent={company.logo}
              description={company.location}
              classNames={{
                base: "py-4",
                title: "text-base font-semibold",
              }}
            >
              {company.name}
            </DropdownItem>
          ))}
          <DropdownItem
            key={0}
            description="Start a new ecommerce"
            startContent={<IoMdAdd className="text-2xl rounded-md" />}
            classNames={{
              base: "p-3 mt-5 font-semibold text-default-900",
              title: "text-base font-semibold",
            }}
          >
            Add ecommerce
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
