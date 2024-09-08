import { memo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, DropDown, FormDiv, InputField, Text } from "../units";
import { CountryData, DistricData, MunicipalityData } from "../constant";
import { useProgressContext } from "../context/progress-bar-context";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressDetailsFormData>({
    resolver: zodResolver(addressDetailsSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<AddressDetailsFormData> = (data) => {
    console.log(data);
    context?.setCurrentStep((curre) => curre + 1);
  };

  return (
    <FormDiv>
      <Text variant="mid">Address</Text>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-7 w-full"
      >
        <div className="flex flex-col gap-2">
          <Text size="small">Country</Text>
          <DropDown {...register("country")} options={CountryData} />
          {errors.country && (
            <Text size="tiny" usage="warning">
              {errors.country.message}
            </Text>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Text size="small">District</Text>
          <DropDown {...register("district")} options={DistricData} />
          {errors.district && (
            <Text size="tiny" usage="warning">
              {errors.district.message}
            </Text>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Text size="small">Municipality/Local</Text>
          <DropDown {...register("municipality")} options={MunicipalityData} />
          {errors.municipality && (
            <Text size="tiny" usage="warning">
              {errors.municipality.message}
            </Text>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Text size="small">City</Text>
          <InputField {...register("city")} />
          {errors.city && (
            <Text size="tiny" usage="warning">
              {errors.city.message}
            </Text>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Text size="small">Ward</Text>
          <InputField {...register("ward")} />
          {errors.ward && (
            <Text size="tiny" usage="warning">
              {errors.ward.message}
            </Text>
          )}
        </div>

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
