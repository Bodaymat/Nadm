const Form = ({ children }) => {
  return (
    <>
      <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800/50">
        <form className="flex flex-col gap-5">{children}</form>
      </div>
    </>
  );
};

export default Form;
