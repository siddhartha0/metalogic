import { memo } from "react";
import { Button, FormDiv, InputField, Text } from "../units";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProgressContext } from "../context/progress-bar-context";
import { useUserContext } from "../context/user-context";

const personalDetailsSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().regex(/^98\d{8}$/, {
    message: "Provide correct number",
  }),
  birthDate: z.string().min(1, { message: "Birth date is required" }),
  gender: z.enum(["Male", "Female", "Others"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
});

export type PersonalDetailsFormData = z.infer<typeof personalDetailsSchema>;

export const PersonalDetails = memo(() => {
  const context = useProgressContext();
  const userContext = useUserContext();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<PersonalDetailsFormData>({
    resolver: zodResolver(personalDetailsSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<PersonalDetailsFormData> = (data) => {
    userContext?.setPersonalDetails({
      birthDate: data.birthDate,
      firstName: data.firstName,
      gender: data.gender,
      lastName: data.lastName,
      phone: data.phone,
      middleName: data?.middleName,
    });

    context?.setCurrentStep((current) => current + 1);
  };
  return (
    <FormDiv>
      <Text variant="mid">Personal Details</Text>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:grid  md:grid-cols-2  lg:grid-cols-3 flex flex-col   gap-7 w-full"
      >
        <div className="flex flex-col gap-2">
          <Text size="small">First Name</Text>
          <InputField
            placeholder="Enter your first name"
            {...register("firstName")}
          />
          {errors.firstName && (
            <Text size="tiny" usage="warning">
              {errors?.firstName.message as string}
            </Text>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Text size="small">Middle Name</Text>
          <InputField
            placeholder="Enter your middle name"
            {...register("middleName")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Text size="small">Last Name</Text>
          <InputField
            placeholder="Enter your last name"
            {...register("lastName")}
          />
          {errors.lastName && (
            <Text size="tiny" usage="warning">
              {errors?.lastName?.message as string}
            </Text>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Text size="small">Phone</Text>
          <InputField placeholder="98xxxxx6x" {...register("phone")} />
          {errors.phone && (
            <Text size="tiny" usage="warning">
              {errors.phone.message as string}
            </Text>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Text size="small">Birth Date</Text>
          <InputField
            type="date"
            placeholder="DD/MM/YYYY"
            {...register("birthDate")}
          />
          {errors.birthDate && (
            <Text size="tiny" usage="warning">
              {errors.birthDate?.message as string}
            </Text>
          )}
        </div>

        <div className="flex flex-col gap-2 col-span-3 ">
          <Text size="small">Birth Date</Text>
          <div className="flex gap-2">
            <Text size="tiny" className="flex gap-2">
              <input type="radio" value="Male" {...register("gender")} />
              Male
            </Text>

            <Text size="tiny" className="flex gap-2">
              <input type="radio" value="Female" {...register("gender")} />
              Female
            </Text>

            <Text size="tiny" className="flex gap-2">
              <input type="radio" value="Others" {...register("gender")} />
              Others
            </Text>
          </div>
          {errors.gender && (
            <Text size="tiny" usage="warning">
              {errors.gender.message as string}
            </Text>
          )}
        </div>
        <Button
          type="submit"
          className="flex col-span-3   place-self-end w-[20%] justify-center"
        >
          Next
        </Button>
      </form>
    </FormDiv>
  );
});
