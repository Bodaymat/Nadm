const Button = ({ text, type, PrefixIcon }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="mt-2 w-full bg-primary hover:bg-primary/90 h-12 rounded-xl text-white font-semibold transition-all shadow-xl shadow-primary/20 active:scale-[0.98] flex items-center justify-center gap-2 transform hover:-translate-y-0.5  focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark"
        type={type ?? "submit"}
      >
        {PrefixIcon != null ? <PrefixIcon size={16} /> : ""}
        {text}
      </button>
    </>
  );
};

const onClick = (e) => {
  // e.preventDefault();
};

export default Button;
