import Link from "next/link";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import { AiFillProduct } from "react-icons/ai";
import ProfileInfo from "@/components/profile/profileInfo";
import TabNavigationProfile from "@/components/profile/tabNavigationProfile";

interface Props {
  children: React.ReactNode;
}

const Navigation = () => (
  <ul className="flex">
    <li className="flex gap-2">
      <HouseIcon />
      <Link href={"/dashboard"}>
        <span>Inicio</span>
      </Link>
      <span> / </span>{" "}
    </li>

    <li className="flex items-center gap-2">
      <AiFillProduct className="text-xl text-gray-400 ml-2" />
      <span>Perfil</span>
      <span> / </span>{" "}
    </li>
  </ul>
);

const ProfileLayout = ({ children }: Props) => {
  return (
    <div className="mt-10 max-w-[99rem] mx-auto w-full flex flex-col gap-4">
      <Navigation />
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Mi perfil</h1>
        <p className="text-default-500">Actualiza tu información personal.</p>
      </div>
      <div className="w-full flex gap-16 mt-10">
        <ProfileInfo />
        <div className="flex w-full flex-col">
          <TabNavigationProfile />
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
