import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const CustomAlert = ({ Icon, title, description }) => {
  return (
    <>
      <Alert className="w-full bg-white dark:bg-[rgb(26,42,46)] border border-gray-200 dark:border-[rgb(36,65,71)] rounded-xl p-5 flex gap-4 text-left shadow-sm">
        <Icon className="stroke-secondarytext-light dark:stroke-secondarytext-dark shrink-0" />
        <div className="flex flex-col">
          <AlertTitle className="text-sm font-semibold text-[#111f22] dark:text-white">
            {title}
          </AlertTitle>
          <AlertDescription className="text-xs text-secondarytext-light dark:text-secondarytext-dark mt-1 leading-relaxed">
            {description}
          </AlertDescription>
        </div>
      </Alert>
    </>
  );
};

export default CustomAlert;
