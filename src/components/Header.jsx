const Header = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-2 text-center md:text-left">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        Welcome back
      </h1>
      <p className="text-secondarytext-light dark:text-secondarytext-dark text-base font-normal">
        Track your commitments in peace.
      </p>
    </div>
  );
};

export default Header;
