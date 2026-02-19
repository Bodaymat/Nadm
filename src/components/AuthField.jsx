import MailIcon from "../assets/mail.svg?react";
import AuthInput from "./AuthInput";
const AuthField = ({
  label,
  labelText,
  Icon,
  inputType,
  placeholder,
  isError,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-slate-700 dark:text-slate-200 text-sm font-medium"
        htmlFor={label}
      >
        {labelText}
      </label>
      <div className="relative group">
        <div
          className={`absolute left-3 top-1/2 -translate-y-1/2 ${isError ? "text-red-400 group-focus-within:text-red-500" : "text-slate-400 group-focus-within:text-primary"} transition-colors`}
        >
          <Icon className="size-5" />
        </div>
        <AuthInput
          type={inputType}
          placeholder={placeholder}
          isError={isError}
          {...rest}
        />
      </div>
    </div>
  );
};

export default AuthField;
