import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import Weather from '@/components/WeatherHeader/weather';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        headerTitle: ({children}) => <Weather title={children}/>,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'To Do',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="rps"
        options={{
          title: 'Game',
          headerTitle: () => <Weather title='Game'/>,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gamecontroller.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="randomGen"
        options={{
          title: 'Random',
          headerTitle: () => <Weather title='Random'/>,
          tabBarIcon: ({ color }) => <FontAwesome5 name="random" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
