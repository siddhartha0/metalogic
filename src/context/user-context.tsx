import React, { createContext, useContext, useState } from "react";
import { AddressDetailsFormData, PersonalDetailsFormData } from "../components";

interface userTypes {
  personalDetails: PersonalDetailsFormData;
  setPersonalDetails: React.Dispatch<
    React.SetStateAction<PersonalDetailsFormData>
  >;
  addressDetails: AddressDetailsFormData;
  setAddressDetails: React.Dispatch<
    React.SetStateAction<AddressDetailsFormData>
  >;
}

const userDetailsContext = createContext<userTypes | null>(null);

export const UserContent = ({ children }: { children: React.ReactNode }) => {
  const [personalDetails, setPersonalDetails] =
    useState<PersonalDetailsFormData>({
      birthDate: "",
      firstName: "",
      phone: "",
      middleName: "",
      lastName: "",
      gender: "Male",
    });

  const [addressDetails, setAddressDetails] = useState<AddressDetailsFormData>({
    country: "",
    district: "",
    municipality: "",
    city: "",
    ward: "",
  });

  return (
    <userDetailsContext.Provider
      value={{
        addressDetails,
        setPersonalDetails,
        personalDetails,
        setAddressDetails,
      }}
    >
      {children}
    </userDetailsContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(userDetailsContext);

  return context;
};
