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

const Register = () => {
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
            <Form>
              <AuthField
                label={"username"}
                labelText={"Email address"}
                Icon={Person}
                inputType={"text"}
                placeholder={"Full Name"}
              />
              <AuthField
                label={"email"}
                labelText={"Email address"}
                Icon={EmailIcon}
                inputType={"email"}
                placeholder={"name@example.com"}
              />
              <LinkButton href="/register/password" text="Continue" />
              {/* <Button text="Create Account" /> */}
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

export default Register;
