import Logo from "../assets/logo.svg?react";
import "../App.css";

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5 md:px-10 z-10 relative">
      <div className="w-full flex items-center gap-3">
        <Logo className="w-8 h-8 fill-primary" />
        <h1 className="dark:text-white text-xl font-bold tracking-tight">
          Nadm
        </h1>
      </div>
    </div>
  );
};

export default Nav;
