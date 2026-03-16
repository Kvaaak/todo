import { router } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>

      <Pressable onPress={() => router.push("/(tabs)")} style={styles.link}>
        <ThemedText>Tools</ThemedText>
      </Pressable>

      <Pressable onPress={() => router.push("/(games)/rps")} style={styles.link}>
        <ThemedText>Games</ThemedText>
      </Pressable>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    padding: 20,
    marginTop: 15,
    paddingVertical: 15,
    borderRadius: 6,
    backgroundColor: '#aaa',
  },
});
