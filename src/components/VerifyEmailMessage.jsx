const VerifyEmailMessage = ({ email }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-[#111f22] dark:text-white text-3xl md:text-4xl font-bold tracking-tight">
          Check your inbox
        </h1>
        <p className="text-secondarytext-light dark:text-secondarytext-dark text-base font-normal leading-relaxed">
          We've sent a verification link to <br />
          <span className="font-semibold text-[#111f22] dark:text-white">
            {email}
          </span>
        </p>
        <p className="text-secondarytext-light dark:text-secondarytext-dark text-sm">
          Please click the link in the email to activate your account and start
          your journey.
        </p>
      </div>
    </>
  );
};

export default VerifyEmailMessage;
