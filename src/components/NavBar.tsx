import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import Image from "next/image";
import hiristLogo from "../assets/hiristLogo.png";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="m-auto flex  max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image alt="Hirist" src={hiristLogo} width={30} height={30} />
          <span className="text-xl font-bold tracking-tight">Hirist</span>
        </Link>
        <Button asChild>
          <Link href="/jobs/new">Post a job</Link>
        </Button>
      </nav>
    </header>
  );
};

export default NavBar;
