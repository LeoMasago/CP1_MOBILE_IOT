import { View, Image, Text } from "react-native";

interface HeaderLoginProps {
  logo: any;
  title: string;
}

export function HeaderLogin({ logo, title }: HeaderLoginProps) {
  return (
    <View>
      <Image
        source={logo}
        className="w-48 h-48 mx-auto"
        resizeMode="contain"
      />
      <Text className="text-2xl font-bold text-white mb-6 text-center">{title}</Text>
    </View>
  );
}