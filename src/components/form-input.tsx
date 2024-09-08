import { Text } from "../units";

export const FormInput = ({
  label,
  errorMessage,
  children,
}: {
  label: string;
  errorMessage?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <Text size="small">{label}</Text>
    {children}
    {errorMessage && (
      <Text size="tiny" usage="warning">
        {errorMessage}
      </Text>
    )}
  </div>
);
