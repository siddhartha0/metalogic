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
  img: string | ArrayBuffer | null;
  setImg: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
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
  const [img, setImg] = useState<string | ArrayBuffer | null>(null);

  return (
    <userDetailsContext.Provider
      value={{
        addressDetails,
        setPersonalDetails,
        personalDetails,
        setAddressDetails,
        img,
        setImg,
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
