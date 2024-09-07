import img from "./assets/background.png";
import { Home } from "./pages";

export const App = () => {
  return (
    <main
      className="bg-brand min-h-screen w-screen"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Home />
    </main>
  );
};
