import RPS from '@/components/RPS/rps';
import { ThemedView } from '@/components/themed-view';

export default function GameScreen() {
  return (
    <ThemedView style={{flex: 1}}>
      <RPS/>
    </ThemedView>
  )
}