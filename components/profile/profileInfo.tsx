"use client";
import useSession from "../hooks/useSession";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "@nextui-org/react";

const ProfileInfo = () => {
  const user = useSession();

  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center">
        <img
          className="w-[220px] h-[220px] md:h-[180px] mb-5 rounded-full shadow-sm object-cover border-2 p-1 border-slate-200"
          src="/img/profileImage.jpg"
        />
        <p className="text-lg font-semibold">{user?.name}</p>
        <div className="flex gap-1 items-center">
          <MdOutlineEmail className="text-gray-400" />
          <p className="text-gray-400 text-sm">{user?.email}</p>
        </div>
        <Button
          className="mt-5 w-full bg-indigo-600 text-white rounded-md"
          variant="faded"
          size="sm"
        >
          Cambiar foto
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
