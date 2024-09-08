import { memo } from "react";
import { Button, FormDiv, InputField, Text } from "../units";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProgressContext, useUserContext } from "../context";
import { FormInput } from "./";

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
    defaultValues: userContext?.personalDetails,
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
        <FormInput label="First Name" errorMessage={errors.firstName?.message}>
          <InputField
            placeholder="Enter your first name"
            {...register("firstName")}
          />
        </FormInput>

        <FormInput label="Middle Name">
          <InputField
            placeholder="Enter your middle name"
            {...register("middleName")}
          />
        </FormInput>

        <FormInput label="Last Name" errorMessage={errors.lastName?.message}>
          <InputField
            placeholder="Enter your last name"
            {...register("lastName")}
          />
        </FormInput>

        <FormInput label="Phone" errorMessage={errors.phone?.message}>
          <InputField placeholder="9xxxxxxxx" {...register("phone")} />
        </FormInput>

        <FormInput label="Birth Date" errorMessage={errors.birthDate?.message}>
          <InputField
            type="date"
            placeholder="DD/MM/YYYY"
            {...register("birthDate")}
          />
        </FormInput>

        <div className="flex flex-col gap-2 col-span-3 ">
          <FormInput label="Gender" errorMessage={errors.gender?.message}>
            <div className="flex gap-2">
              {["Male", "Female", "Others"].map((gender) => (
                <label key={gender} className="flex gap-2">
                  <input type="radio" value={gender} {...register("gender")} />
                  {gender}
                </label>
              ))}
            </div>
          </FormInput>
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
