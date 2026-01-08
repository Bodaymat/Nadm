const Separator = () => {
  return (
    <div className="relative ">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t border-slate-200 dark:border-slate-700"></span>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white dark:bg-surface-dark px-2 text-slate-500 dark:text-slate-400">
          or
        </span>
      </div>
    </div>
  );
};

export default Separator;
