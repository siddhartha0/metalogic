import { memo } from "react";
import { Text } from "../units";
import { AddressDetails, PersonalDetails, ProgressBar } from "./";
import { ProfilePicDetails } from "./profile-picutre";

export const UserForm = memo(() => {
  return (
    <main className="flex flex-col gap-6 w-full place-items-center">
      <Text size="header" variant="rare">
        Register
      </Text>
      <ProgressBar />
      {/* <AddressDetails /> */}
      <ProfilePicDetails />
    </main>
  );
});
