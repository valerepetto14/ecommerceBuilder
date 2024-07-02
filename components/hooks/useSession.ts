import { useSession as sessionAuth } from "next-auth/react";

const useSession = () => {
  const { data: session } = sessionAuth();
  return session?.user;
};

export default useSession;
