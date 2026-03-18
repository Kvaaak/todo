import CalculatorApp from '@/components/Calculator/calculatorApp'
import { ThemedView } from '@/components/themed-view'

export default function CalculatorScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <CalculatorApp />
    </ThemedView>
  )
}