import { memo } from "react";
import companyLogo from "../assets/companyLogo.png";
import { UserForm } from "../components";

export const Home = memo(() => {
  return (
    <main className="flex flex-col p-4 gap-4 z-10">
      <img src={companyLogo} alt="img" className="h-[78px] w-[104px]" />
      <UserForm />
    </main>
  );
});
