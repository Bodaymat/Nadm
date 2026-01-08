import { Link } from "react-router-dom";

const CTA = ({ text, href, prefix, position, classNames }) => {
  return (
    <div className={`text-${position} ${classNames}`}>
      <p className="text-slate-600 dark:text-slate-300 text-sm">
        {prefix ? prefix + " " : ""}
        <Link
          className="text-[0.8rem] text-primary font-semibold hover:underline decoration-2 underline-offset-4 ml-1"
          to={href ?? "#"}
        >
          {text}
        </Link>
      </p>
    </div>
  );
};

export default CTA;
