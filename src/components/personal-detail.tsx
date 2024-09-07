import { FormDiv, InputField, Text } from "../units";

export const PersonalDetails = () => {
  return (
    <FormDiv>
      <Text>Personal Details</Text>
      <section className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <Text size="small">First Name</Text>
          <InputField />
        </div>
      </section>
    </FormDiv>
  );
};
