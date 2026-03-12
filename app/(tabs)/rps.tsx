import { StyleSheet } from 'react-native';

import RPS from '@/components/RPS/rps';
import { ThemedView } from '@/components/themed-view';


export default function GameScreen() {
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
