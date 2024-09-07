import { Button, FormDiv, Text } from "../units";
import img from "../assets/scholar.png";

interface propTypes {
  isForm: boolean;
}

export const ViewProfile = ({ isForm }: propTypes) => {
  return (
    <FormDiv className="min-w-[862px]">
      <Text usage="primary" variant="rare" className="flex place-self-center">
        {isForm ? "Review Your Details" : "My Details"}
      </Text>
      <div
        style={{
          backgroundImage: `url(${img})`,
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
          <Text size="small">Raju</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            First Name :
          </Text>
          <Text size="small">Raju</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            First Name :
          </Text>
          <Text size="small">Raju</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            First Name :
          </Text>
          <Text size="small">Raju</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            First Name :
          </Text>
          <Text size="small">Raju</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            First Name :
          </Text>
          <Text size="small">Raju</Text>
        </div>
      </section>

      <Text variant="mid">Address </Text>
      <section className="grid grid-cols-3 -mt-6 gap-y-2 gap-x-8">
        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            First Name :
          </Text>
          <Text size="small">Raju</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            First Name :
          </Text>
          <Text size="small">Raju</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            First Name :
          </Text>
          <Text size="small">Raju</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            First Name :
          </Text>
          <Text size="small">Raju</Text>
        </div>

        <div className="flex gap-2 ">
          <Text size="small" variant="rare">
            First Name :
          </Text>
          <Text size="small">Raju</Text>
        </div>
      </section>

      {isForm && (
        <div className="flex col-span-3 place-self-end gap-4 justify-center mt-4">
          <Button type="button" usage="rare">
            Back
          </Button>

          <Button type="submit">Submit</Button>
        </div>
      )}
    </FormDiv>
  );
};
