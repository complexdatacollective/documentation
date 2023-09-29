import { ThemeToggle } from "@/components/themeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo.svg";

const Navbar = () => {
  return (
    <div className="border-slate-200 border-b">
      <div className="container flex items-center justify-between h-16 p-1">
        <div className="flex gap-0.5 items-center">
          <Image width="40" height="40" priority src={logo} alt="Logo" />
          <Link className="text-green-400" href={"/"}>
            Network Canvas
          </Link>
        </div>
        <div className="flex gap-3 items-center">
          <ThemeToggle />
          <Button>Community</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
