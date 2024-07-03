import ProfileInfo from "@/components/profile/profileInfo";
import TabNavigationProfile from "@/components/profile/tabNavigationProfile";
import Navigation from "@/components/navigation";
interface Props {
  children: React.ReactNode;
}

const ProfileLayout = ({ children }: Props) => {
  return (
    <div className="mt-10 max-w-[99rem] mx-auto w-full flex flex-col gap-4">
      <Navigation />
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Mi perfil</h1>
        <p className="text-default-500">Actualiza tu información personal.</p>
      </div>
      <div className="w-full flex flex-col items-center md:items-start  md:flex-row gap-16 mt-10">
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
