import { TouchableOpacity, Text, View, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

export function Button({ title, icon, className = "", ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className={`flex-row items-center justify-center px-6 py-4 rounded-xl shadow-lg ${className}`}
      {...rest}
    >
      {icon && <View className="mr-3">{icon}</View>}
      <Text className="text-lg font-bold">{title}</Text>
    </TouchableOpacity>
  );
}