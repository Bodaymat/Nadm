import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Nav from "../components/Nav";
import AuthField from "../components/AuthField";
import LockIcon from "../assets/lock.svg?react";
import LockOpenIcon from "../assets/lock_open.svg?react";
import Button from "../components/Button";
import { LinkButton } from "../components/LinkButton";
import CTA from "../components/CTA";
import Separator from "../components/Separator";
import { useForm } from "react-hook-form";

const ConfirmRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const password = watch("password");

  return (
    <>
      <div className="flex flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200 overflow-hidden min-h-screen relative">
        {/* for design */}
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>

        <Nav />
        <div className="flex-1 flex items-center justify-center z-10 relative">
          <div className="w-full max-w-120 flex flex-col mb-16">
            <Header
              title="Join Nadm - Step 2 of 2"
              subtitle="Track your commitments in peace."
            />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <AuthField
                label={"password"}
                labelText={"Password"}
                Icon={LockIcon}
                inputType={"password"}
                placeholder={"Enter your password"}
                isError={errors.password}
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                    message:
                      "Password must be 8+ chars, with uppercase, lowercase, number & special char",
                  },
                })}
              />
              <AuthField
                label={"confirmPassword"}
                labelText={"Confirm Password"}
                Icon={LockOpenIcon}
                inputType={"password"}
                placeholder={"Re-enter your password"}
                isError={errors.confirmPassword}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <Button text="Create Account" />
              {/* <LinkButton
                href="/register/confirm-email"
                text="Create Account"
              /> */}
              <Separator />
              <CTA
                prefix={"Already a member?"}
                text={"Sign in"}
                href={"/login"}
                position={"center"}
              />
            </Form>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmRegister;
