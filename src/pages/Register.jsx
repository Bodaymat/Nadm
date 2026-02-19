import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Nav from "../components/Nav";
import AuthField from "../components/AuthField";
import EmailIcon from "../assets/mail.svg?react";
import Person from "../assets/person.svg?react";
import Button from "../components/Button";
import CTA from "../components/CTA";
import Separator from "../components/Separator";
import { LinkButton } from "../components/LinkButton";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log("WatchingFN: " + watch("fullName"));
  console.log("WatchingE: " + watch("email"));

  const validateFN = (value) => {
    const trimmed = value.trim();

    if (trimmed.split(" ").length < 2) {
      return "Please enter first and last name";
    }

    if (!/^[A-Za-z\s'-]+$/.test(trimmed)) {
      return "Only letters allowed";
    }

    return true;
  };

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
              title="Join Nadm - Step 1 of 2"
              subtitle="Track your commitments in peace."
            />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <AuthField
                label={"fullName"}
                labelText={"Full Name"}
                Icon={Person}
                inputType={"text"}
                placeholder={"Full Name"}
                isError={errors.fullName}
                {...register("fullName", {
                  required: true,
                  minLength: { value: 3, message: "Invalid full name" },
                  pattern: {
                    value: /^[A-Za-z]+(?:\s+[A-Za-z]+)+$/,
                    message: "Invalid FN",
                  },
                  validate: validateFN,
                })}
              />
              <AuthField
                label={"email"}
                labelText={"Email address"}
                Icon={EmailIcon}
                inputType={"email"}
                placeholder={"name@example.com"}
                isError={errors.email}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
              />
              {/* <LinkButton href="/register/password" text="Continue" /> */}
              <Button text="Continue" />
              <Separator />
              <CTA
                prefix={"Already a member?"}
                text={"Sign in"}
                href={"/login"}
                position={"center"}
              />
            </Form>
            {(errors.email || errors.fullName) && (
              <div className="flex-col space-y-2 mt-3">
                {errors.fullName && (
                  <p className="flex justify-center text-xs italic text-red-500 mt-1">
                    {errors.fullName.message}
                  </p>
                )}
                {errors.email && (
                  <p className="flex justify-center text-xs italic text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            )}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
