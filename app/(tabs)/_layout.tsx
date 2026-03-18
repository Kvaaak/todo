import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import Weather from '@/components/WeatherHeader/weather';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';

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
        name="task"
        options={{
          title: 'To Do',
          tabBarIcon: ({ color }) => <Octicons size={26} name="tasklist" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calculator"
        options={{
          title: 'Calculator',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="calculate"  color={color} />,
        }}
      />
    </Tabs>
  );
}
