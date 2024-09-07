import companyLogo from "../assets/companyLogo.png";

export const Home = () => {
  return (
    <main className="flex flex-col p-4 gap-5">
      <img src={companyLogo} alt="img" className="h-[78px] w-[104px]" />
    </main>
  );
};
