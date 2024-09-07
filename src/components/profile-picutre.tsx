import { useRef, useState } from "react";
import { Button, FormDiv, Text } from "../units";

export const ProfilePicDetails = () => {
  const [img, setImg] = useState<string | ArrayBuffer | null>(null);

  const imgRef = useRef<HTMLInputElement | null>(null);

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const docs = e.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(docs);
      reader.onloadend = function () {
        if (reader.result) {
          setImg(reader.result);
        }
      };
    }
  };

  return (
    <FormDiv className="min-w-[815px] place-items-center">
      <Text usage="primary" variant="rare">
        Set Your Profile Picture
      </Text>

      {img && (
        <div className="flex flex-col gap-2">
          {typeof img === "string" && (
            <div
              style={{
                backgroundImage: `url(${img})`,
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
        <Button type="button" usage="rare">
          Back
        </Button>

        <Button type="submit">Next</Button>
      </div>
    </FormDiv>
  );
};
