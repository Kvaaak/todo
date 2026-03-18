import { useState } from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "../themed-view";
import CalculatorButton from "./calculatorButton";
import CalculatorDisplay from "./calculatorDisplay";

export default function CalculatorApp() {
  const [equation, setEquation] = useState('')
  const [result, setResult] = useState('0')
  const buttons = [
    'C','√','%','DEL',
    '7','8','9','÷',
    '4','5','6','x',
    '1','2','3','-',
    '0',',','=','+'
  ]

  const handleSubmit = (value: string) => {
    setEquation(prev => prev + value)
  }

  return (
    <ThemedView style={styles.container}>
      <CalculatorDisplay equation={equation} result={result}/>

      <ThemedView style={styles.grid}>
        {buttons.map((b, i) => (
          <CalculatorButton key={i} value={b} onPress={handleSubmit}/>
        ))}
      </ThemedView>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 8,
  }
})