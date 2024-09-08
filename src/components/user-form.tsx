import { memo } from "react";
import { Text } from "../units";
import {
  AddressDetails,
  PersonalDetails,
  ProgressBar,
  ProfilePicDetails,
  ViewProfile,
} from "./";
import { useProgressContext } from "../context/progress-bar-context";

export const UserForm = memo(() => {
  const context = useProgressContext();

  const totalSteps = [
    <PersonalDetails />,
    <AddressDetails />,
    <ProfilePicDetails />,
    <ViewProfile />,
  ];

  return (
    <main className="flex flex-col gap-6 w-full place-items-center">
      {!context?.isFormCompleted && (
        <Text size="header" variant="rare">
          Register
        </Text>
      )}
      {!context?.isFormCompleted && <ProgressBar />}
      {totalSteps[(context?.currentStep ?? 0) - 1]}
    </main>
  );
});
