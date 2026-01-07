import AuthField from "./AuthField";
import EmailIcon from "../assets/mail.svg?react";
import LockIcon from "../assets/lock.svg?react";
import SubmitButton from "./SubmitButton";
import CTA from "./CTA";
import Separator from "./Separator";

const Form = () => {
  return (
    <>
      <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800/50">
        <form className="flex flex-col gap-5">
          <AuthField
            label={"email"}
            labelText={"Email address"}
            Icon={EmailIcon}
            inputType={"email"}
            placeholder={"name@example.com"}
          />
          <AuthField
            label={"password"}
            labelText={"Password"}
            Icon={LockIcon}
            inputType={"password"}
            placeholder={"Enter your password"}
          />
          <CTA
            text={"Forgot password?"}
            position={"end"}
            classNames="my-[-0.7rem]"
          />
          <SubmitButton />
          <Separator />
          <CTA
            prefix={"Don't have an account?"}
            text={"Create an account"}
            position={"center"}
          />
        </form>
      </div>
    </>
  );
};

export default Form;
