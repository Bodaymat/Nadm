const Footer = () => {
  return (
    <>
      <div className="flex justify-center gap-6 absolute bottom-8 self-center text-slate-400 dark:text-slate-500 text-xs">
        <a
          className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          href="#"
        >
          Terms of Service
        </a>
      </div>
    </>
  );
};

export default Footer;
