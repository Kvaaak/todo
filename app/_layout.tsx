import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { ToDoProvider } from '@/context/ToDoContext';
import { useColorScheme } from '@/hooks/use-color-scheme';


export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ToDoProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{headerShown: false, animation: "none"}}>
          <Stack.Screen name="modal" options={{  presentation: 'modal'}} />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(games)" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </ToDoProvider>
  );
}
