import { useRef } from "react";
import { Button, FormDiv, Text } from "../units";
import { useProgressContext } from "../context/progress-bar-context";
import { useUserContext } from "../context/user-context";

export const ProfilePicDetails = () => {
  const context = useProgressContext();

  const userContext = useUserContext();

  const imgRef = useRef<HTMLInputElement | null>(null);

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const docs = e.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(docs);
      reader.onloadend = function () {
        if (reader.result) {
          userContext?.setImg(reader.result);
        }
      };
    }
  };

  const submitForm = () => {
    context?.setCurrentStep((cur) => cur + 1);
  };

  return (
    <FormDiv className="md:min-w-[815px] place-items-center">
      <Text usage="primary" variant="rare">
        Set Your Profile Picture
      </Text>

      {userContext?.img && (
        <div className="flex flex-col gap-2">
          {typeof userContext?.img === "string" && (
            <div
              style={{
                backgroundImage: `url(${userContext?.img})`,
                backgroundSize: "cover",
              }}
              className="w-[265px] h-[256px] rounded-xl "
            />
          )}
        </div>
      )}

      <label htmlFor="file-upload" className="cursor-pointer">
        <span className="bg-secondary font-semibold text-white p-2 rounded-lg">
          Upload Image
        </span>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
          ref={imgRef}
          onChange={handleImg}
          required
        />
      </label>

      <div className="flex col-span-3 place-self-end gap-4 justify-center mt-4">
        <Button
          usage="rare"
          onClick={() => context?.setCurrentStep((current) => current - 1)}
        >
          Back
        </Button>

        <Button onClick={submitForm}>Next</Button>
      </div>
    </FormDiv>
  );
};
