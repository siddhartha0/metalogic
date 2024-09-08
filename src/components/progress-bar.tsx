import img from "../assets/scholar.png";
import { useProgressContext } from "../context/progress-bar-context";

export const ProgressBar = () => {
  const totalSteps = 4;
  const context = useProgressContext();

  const currentStep = context?.currentStep ?? 1;

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="relative mb-8">
        <div
          className={`absolute top-1/2 left-0 right-0 -translate-y-1/2 animate-progress-bar-width h-1  bg-grey`}
        />

        <div
          className="absolute top-1/2 left-0  h-1 bg-secondary  -translate-y-1/2 
          transition-all duration-500 ease-in-out
          "
          style={{
            width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
          }}
        />

        <div className="relative flex justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-8  h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500 ease-in-out ${
                step <= currentStep
                  ? "bg-secondary text-white"
                  : "bg-primary text-white  "
              } `}
            >
              {step === currentStep && (
                <div className="absolute -top-4  w-9 ">
                  <img src={img} alt="" />
                </div>
              )}
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
