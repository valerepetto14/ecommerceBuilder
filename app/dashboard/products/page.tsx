"use client";
import Link from "next/link";
import React from "react";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import { AiFillProduct } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { columns, products } from "@/components/products/data";
import { RenderCell } from "@/components/products/render-cell";

const Navigation = () => (
  <ul className="flex">
    <li className="flex gap-2">
      <HouseIcon />
      <Link href={"/dashboard"}>
        <span>Home</span>
      </Link>
      <span> / </span>{" "}
    </li>

    <li className="flex items-center gap-2">
      <AiFillProduct className="text-xl text-gray-400 ml-2" />
      <span>Products</span>
      <span> / </span>{" "}
    </li>
  </ul>
);

const productsPage = () => {
  return (
    <div className="my-10 max-w-[99rem] mx-auto w-full flex flex-col gap-4">
      <Navigation />
      <Table
        radius="sm"
        color="default"
        defaultSelectedKeys={[2]}
        selectionMode="single"
        aria-label="Example table with custom cells"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={products}>
          {(item) => (
            <TableRow>
              {(columnKey) => (
                <TableCell>
                  {RenderCell({ product: item, columnKey: columnKey })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default productsPage;
