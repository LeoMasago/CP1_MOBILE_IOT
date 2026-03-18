import { View, Text, TextInput } from "react-native";

interface InputFieldProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

export function InputField({ label, placeholder, secureTextEntry = false }: InputFieldProps) {
  return (
    <View className="mb-4">
      <Text className="text-2xl font-bold text-white mb-2">{label}</Text>
      <TextInput
        className="w-90 border rounded-lg px-4 py-4 bg-white text-black"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}