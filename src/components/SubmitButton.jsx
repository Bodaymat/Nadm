const SubmitButton = ({ text }) => {
  return (
    <>
      <button
        className="mt-2 w-full bg-primary hover:bg-primary/90 h-12 rounded-xl text-white font-semibold transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
        type="submit"
      >
        {text}
      </button>
    </>
  );
};

export default SubmitButton;
