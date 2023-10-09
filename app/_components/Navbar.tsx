import { ThemeToggle } from "@/components/themeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/img/logo.svg";
import AlgoliaSearch from "./AlgoliaSearch";

const Navbar = () => {
  return (
    <div className="border-slate-200 border-b mb-5">
      <div className="container flex items-center justify-between h-16 p-1">
        <Link href={"/"} className="flex gap-0.5 items-center">
          <Image width="40" height="40" priority src={logo} alt="Logo" />
          <span className="text-green-400">Network Canvas</span>
        </Link>
        <div className="flex gap-3 items-center">
          <ThemeToggle />
          <Button>Community</Button>A
        </div>
      </div>
    </div>
  );
};

export default Navbar;
