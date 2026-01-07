import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Login = () => {
  return (
    <>
      <div className="flex flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200 overflow-hidden min-h-screen relative">
        {/* for design */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>

        <Nav />
        <div className="flex-1 flex items-center justify-center p-4 z-10 relative">
          <div className="w-full max-w-120 flex flex-col gap-8">
            <Header
              title="Welcome back"
              subtitle="Track your commitments in peace."
            />
            <Form />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
