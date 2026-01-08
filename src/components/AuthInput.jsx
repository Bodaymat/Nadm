const AuthInput = ({ placeholder, type }) => {
  return (
    <>
      <input
        className="w-full rounded-xl bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-[#345d65] h-12 leading-12 pl-10 pr-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#5a7a82] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
        id="email"
        placeholder={placeholder ?? "name.com"}
        type={type ?? "email"}
      />
    </>
  );
};

export default AuthInput;
