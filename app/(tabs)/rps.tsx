import { StyleSheet } from 'react-native';

import RPS from '@/components/rps';
import { ThemedView } from '@/components/themed-view';


export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <RPS/>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
