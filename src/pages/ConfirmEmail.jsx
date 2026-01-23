import Nav from "../components/Nav";
import MarkEmailUnread from "../assets/mark_email_unread.svg?react";
import InfoIcon from "../assets/info.svg?react";
import Footer from "../components/Footer";
import VerifyEmailMessage from "../components/VerifyEmailMessage";
import CustomAlert from "../components/CustomAlert";
import Button from "../components/Button";
import CTA from "../components/CTA";
import { Info, SendHorizontal } from "lucide-react";

const ConfirmEmail = () => {
  return (
    <>
      <div className="flex flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200 overflow-hidden min-h-screen relative">
        {/* for design */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>

        <Nav />
        <div className="flex-1 flex items-center justify-center z-10 relative">
          <div className="w-full max-w-120 flex flex-col mb-16 text-center items-center gap-10">
            <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-glow mb-2 animate-pulse">
              <MarkEmailUnread className="size-12 fill-primary" />
            </div>
            <VerifyEmailMessage email="b.user@example.com" />
            <CustomAlert
              Icon={Info}
              title="Can't find the email?"
              description="Check your spam or junk folder. It may take a few minutes to arrive."
            />
            <Button
              PrefixIcon={SendHorizontal}
              text={"Resend Verification Email"}
            />

            <CTA text="Back to Sign in" href="/login" />

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmEmail;
