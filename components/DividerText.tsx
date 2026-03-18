import { Text } from "react-native";

interface DividerTextProps {
  text: string;
  darkMode: boolean;
}

export function DividerText({ text, darkMode }: DividerTextProps) {
  return (
    <Text className={`text-xl font-bold text-center p-5 opacity-80 ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
      {text}
    </Text>
  );
}