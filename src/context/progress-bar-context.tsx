import React, { createContext, useContext, useState } from "react";

type contextTypes = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  isFormCompleted: boolean;
  setIsFormCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};

const progressContext = createContext<contextTypes | null>(null);

interface contentPropTypes {
  children: React.ReactNode;
}

export const ProgressContent = ({ children }: contentPropTypes) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);

  return (
    <progressContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        isFormCompleted,
        setIsFormCompleted,
      }}
    >
      {children}
    </progressContext.Provider>
  );
};

export const useProgressContext = () => {
  const context = useContext(progressContext);

  if (context) return context;
};
