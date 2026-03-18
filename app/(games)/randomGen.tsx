import RandomGen from '@/components/RandomGen/randomGen'
import { ThemedView } from '@/components/themed-view'

export default function RandomScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <RandomGen />
    </ThemedView>
  )
}