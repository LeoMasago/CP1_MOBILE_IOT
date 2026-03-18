import { View, Text, Switch } from "react-native";

interface ThemeSwitchProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function ThemeSwitch({ isDarkMode, setIsDarkMode }: ThemeSwitchProps) {
  return (
    <View className="flex-row justify-between items-center mt-4">
      <Text className={`text-xl font-bold ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>
        {isDarkMode ? "Dark mode" : "Light mode"}
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: "#767577", true: "#e11d48" }}
        thumbColor={isDarkMode ? "#9ca3af" : "#f4f3f4"}
      />
    </View>
  );
}