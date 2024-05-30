import Link from "next/link";
import ResponsiveScreenDiv from "../common/ResponsiveScreenDiv";
import Image from "next/image";
import AuthHeaderComp from "../auth/AuthHeaderComp";
import { useAppStore } from "@/context/store";

const Header = () => {
  const user = useAppStore((state) => state.user);
  const removeUser = useAppStore((state) => state.removeUser);

  return (
    <ResponsiveScreenDiv className="px-8 flex justify-between items-center">
      <Link href="/" className="flex content-center">
        <Image width="100" height="100" src="/logo.svg" alt="meono-logo" />
      </Link>
      <AuthHeaderComp user={user} logout={removeUser} />
    </ResponsiveScreenDiv>
  );
};

const Footer = () => {
  return (
    <ResponsiveScreenDiv className="px-8 flex justify-between">
      <div>MeoNo</div>
      <div>Login</div>
    </ResponsiveScreenDiv>
  );
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <header className="h-12 border flex justify-center">
        <Header />
      </header>

      <main className="flex-grow flex justify-center">
        <ResponsiveScreenDiv className="bg-slate-100">
          {children}
        </ResponsiveScreenDiv>
      </main>

      <footer className="h-12 border flex justify-center">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
