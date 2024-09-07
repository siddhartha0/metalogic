import { memo } from "react";
import { Text } from "../units";
import {
  AddressDetails,
  PersonalDetails,
  ProgressBar,
  ProfilePicDetails,
  ViewProfile,
} from "./";

export const UserForm = memo(() => {
  const totalSteps = [
    <PersonalDetails />,
    <AddressDetails />,
    <ProfilePicDetails />,
    <ViewProfile isForm />,
  ];

  return (
    <main className="flex flex-col gap-6 w-full place-items-center">
      <Text size="header" variant="rare">
        Register
      </Text>
      <ProgressBar />
      {totalSteps[3]}
    </main>
  );
});
