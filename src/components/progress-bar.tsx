import { useState } from "react";
import img from "../assets/scholar.png";

export const ProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="relative mb-8">
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-grey"></div>

        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-secondary transition-all duration-500 ease-in-out"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>

        <div className="relative flex justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-8  h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500 ease-in-out ${
                step <= currentStep
                  ? "bg-secondary text-white"
                  : "bg-primary text-white  "
              } ${step === 4 ? "bg-purple-500" : ""}`}
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
      <button
        onClick={handleNext}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
        disabled={currentStep === totalSteps}
      >
        {currentStep === totalSteps ? "Completed" : "Next"}
      </button>
    </div>
  );
};
