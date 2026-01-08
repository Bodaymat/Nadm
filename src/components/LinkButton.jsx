import { Link } from "react-router-dom";

export const LinkButton = ({ href, text }) => {
  return (
    <>
      <Link
        className="flex justify-center items-center mt-2 w-full bg-primary hover:bg-primary/90 h-12 rounded-xl text-white font-semibold transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
        to={href}
      >
        {text}
      </Link>
    </>
  );
};
