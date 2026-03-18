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
    switch (value) {
      case 'C':
        setEquation('')
        setResult('0')
        break
      case 'DEL':
        setEquation(prev => prev.slice(0 ,-1))
        break
      case '=':
        try {
          const replaced = equation
            .replace(/÷/g, '/')
            .replace(/x/g, '*')
            .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)')
            .replace(/(\d+(\.\d+)?)%/g, '($1/100)')
            .replace(/,/g, '.')
          const evalResult = eval(replaced)
          setResult(String(evalResult))
        } catch {
          setResult('Error')
        }
        break
      default:
        setEquation(prev => prev + value)
        break
    }
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
  )
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