import { memo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, FormDiv, InputField, Text } from "../units";
import { CountryData, DistricData, MunicipalityData } from "../constant";
import { useProgressContext, useUserContext } from "../context";
import { FormDropdown } from "./form-dropdown";
import { FormInput } from "./form-input";

const addressDetailsSchema = z.object({
  country: z.string().min(1, "Country is required"),
  district: z.string().min(1, "District is required"),
  municipality: z.string().min(1, "Municipality/Local is required"),
  city: z.string().min(1, "City is required"),
  ward: z.string().min(1, "Ward is required"),
});

export type AddressDetailsFormData = z.infer<typeof addressDetailsSchema>;

export const AddressDetails = memo(() => {
  const context = useProgressContext();
  const userContext = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressDetailsFormData>({
    resolver: zodResolver(addressDetailsSchema),
    defaultValues: userContext?.addressDetails,
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<AddressDetailsFormData> = (data) => {
    userContext?.setAddressDetails({
      city: data.city,
      country: data.country,
      district: data.district,
      municipality: data.municipality,
      ward: data.ward,
    });
    context?.setCurrentStep((curre) => curre + 1);
  };

  return (
    <FormDiv>
      <Text variant="mid">Address</Text>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:grid  md:grid-cols-2  lg:grid-cols-3 flex flex-col   gap-7 w-full"
      >
        <FormDropdown
          label="Country"
          options={CountryData}
          placeholder="Eg: Nepal"
          errorMessage={errors.country?.message}
          register={register}
          name="country"
        />
        <FormDropdown
          label="District"
          options={DistricData}
          placeholder="Eg: Kathmandu"
          errorMessage={errors.district?.message}
          register={register}
          name="district"
        />
        <FormDropdown
          label="Municipality/Local"
          options={MunicipalityData}
          placeholder="Eg: Lalitpur"
          errorMessage={errors.municipality?.message}
          register={register}
          name="municipality"
        />
        <FormInput label="City" errorMessage={errors.city?.message}>
          <InputField placeholder="City..." {...register("city")} />
        </FormInput>
        <FormInput label="Ward" errorMessage={errors.ward?.message}>
          <InputField placeholder="Ward no..." {...register("ward")} />
        </FormInput>
        <div className="flex col-span-3 place-self-end gap-4 justify-center mt-4">
          <Button
            type="button"
            usage="rare"
            onClick={() => context?.setCurrentStep((current) => current - 1)}
          >
            Back
          </Button>

          <Button type="submit">Next</Button>
        </div>
      </form>
    </FormDiv>
  );
});
