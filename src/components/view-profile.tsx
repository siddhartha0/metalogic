import { Button, FormDiv, Text } from "../units";

import { useProgressContext } from "../context/progress-bar-context";
import { useUserContext } from "../context/user-context";

export const ViewProfile = () => {
  const context = useProgressContext();
  const userContext = useUserContext();

  const submitForm = () => {
    context?.setIsFormCompleted(true);
  };

  return (
    <FormDiv className="min-w-[862px]">
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
      <section className="grid grid-cols-3 -mt-6 gap-y-2 gap-x-8">
        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            First Name :
          </Text>
          <Text size="small">{userContext?.personalDetails.firstName}</Text>
        </div>
        {userContext?.personalDetails.middleName && (
          <div className="flex gap-2 ">
            <Text size="small" variant="rare">
              Middle Name :
            </Text>
            <Text size="small">{userContext?.personalDetails.middleName}</Text>
          </div>
        )}
        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            Last Name :
          </Text>
          <Text size="small">{userContext?.personalDetails.lastName}</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            Phone :
          </Text>
          <Text size="small">{userContext?.personalDetails.phone}</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            Birth Date :
          </Text>
          <Text size="small">{userContext?.personalDetails.birthDate}</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            Gender :
          </Text>
          <Text size="small">{userContext?.personalDetails.gender}</Text>
        </div>
      </section>

      <Text variant="mid">Address </Text>
      <section className="grid grid-cols-3 -mt-6 gap-y-2 gap-x-8">
        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            Country :
          </Text>
          <Text size="small">{userContext?.addressDetails.country}</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            District :
          </Text>
          <Text size="small">{userContext?.addressDetails.district}</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            Municipality/Local :
          </Text>
          <Text size="small">{userContext?.addressDetails.municipality}</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            City :
          </Text>
          <Text size="small">{userContext?.addressDetails.city}</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            Ward :
          </Text>
          <Text size="small">{userContext?.addressDetails.ward}</Text>
        </div>
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
