import { Button, FormDiv, Text } from "../units";

import { useProgressContext } from "../context/progress-bar-context";
import { useUserContext } from "../context/user-context";
import { DisplayContent } from "./display-content";

export const ViewProfile = () => {
  const context = useProgressContext();
  const userContext = useUserContext();

  const submitForm = () => {
    context?.setIsFormCompleted(true);
  };

  return (
    <FormDiv className="md:min-w-[862px]">
      <Text usage="primary" variant="rare" className="flex place-self-center">
        {context?.isFormCompleted ? "My Details" : "Review Your Details"}
      </Text>
      <div
        style={{
          backgroundImage: `url(${userContext?.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[265px] h-[256px] rounded-[61px] border border-grey "
      />

      <Text variant="mid">Personal Details</Text>
      <section className="md:grid  md:grid-cols-2  lg:grid-cols-3 flex flex-col -mt-6 gap-y-2 gap-x-8">
        <DisplayContent
          title="First Name"
          content={userContext?.personalDetails.firstName ?? ""}
        />
        {userContext?.personalDetails.middleName && (
          <DisplayContent
            title="Middle Name"
            content={userContext?.personalDetails.middleName ?? ""}
          />
        )}
        <DisplayContent
          title="Last Name"
          content={userContext?.personalDetails.lastName ?? ""}
        />

        <DisplayContent
          title="Phone"
          content={userContext?.personalDetails.phone ?? ""}
        />
        <DisplayContent
          title="Birth Date"
          content={userContext?.personalDetails.birthDate ?? ""}
        />
        <DisplayContent
          title="Gender"
          content={userContext?.personalDetails.gender ?? ""}
        />
      </section>

      <Text variant="mid">Address </Text>
      <section className="md:grid  md:grid-cols-2  lg:grid-cols-3 flex flex-col -mt-6 gap-y-2 gap-x-8">
        <DisplayContent
          title="Country"
          content={userContext?.addressDetails.country ?? ""}
        />

        <DisplayContent
          title="District"
          content={userContext?.addressDetails.district ?? ""}
        />

        <DisplayContent
          title="Municipality/Local"
          content={userContext?.addressDetails.municipality ?? ""}
        />

        <DisplayContent
          title="City"
          content={userContext?.addressDetails.city ?? ""}
        />

        <DisplayContent
          title="Ward"
          content={userContext?.addressDetails.ward ?? ""}
        />
      </section>

      {!context?.isFormCompleted && (
        <div className="flex col-span-3 place-self-end gap-4 justify-center mt-4">
          <Button
            usage="rare"
            onClick={() => context?.setCurrentStep((current) => current - 1)}
          >
            Back
          </Button>

          <Button onClick={() => submitForm()}>Submit</Button>
        </div>
      )}
    </FormDiv>
  );
};
