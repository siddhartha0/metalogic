import { UseFormRegister } from "react-hook-form";
import { AddressDetailsFormData } from "./address-details";
import { DropDown, Text } from "../units";
import { FormInput } from "./form-input";

interface FormDropdownProps {
  label: string;
  options: string[];
  placeholder: string;
  errorMessage?: string;
  register: UseFormRegister<AddressDetailsFormData>;
  name: keyof AddressDetailsFormData;
}

export const FormDropdown = ({
  label,
  options,
  placeholder,
  errorMessage,
  register,
  name,
}: FormDropdownProps) => (
  <FormInput label={label} errorMessage={errorMessage}>
    <DropDown placeholder={placeholder} options={options} {...register(name)} />
    {errorMessage && (
      <Text size="tiny" usage="warning">
        {errorMessage}
      </Text>
    )}
  </FormInput>
);
