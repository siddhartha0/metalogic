import { Text } from "../units";

interface propTypes {
  title: string;
  content: string;
}

export const DisplayContent = ({ title, content }: propTypes) => {
  return (
    <div className="flex gap-2 ">
      <Text size="small" variant="rare">
        {title} :
      </Text>
      <Text size="small">{content}</Text>
    </div>
  );
};
