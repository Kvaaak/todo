import { StyleSheet } from "react-native";
import { ThemedView } from "../themed-view";
import CalculatorButton from "./calculatorButton";
import CalculatorDisplay from "./calculatorDisplay";

export default function CalculatorApp() {
  const buttons = [
    'C','√','%','DEL',
    '7','8','9','÷',
    '4','5','6','x',
    '1','2','3','-',
    '0',',','=','+'
  ]

  return (
    <ThemedView style={styles.container}>
      <CalculatorDisplay/>

      <ThemedView style={styles.grid}>
        {buttons.map((b, i) => (
          <CalculatorButton key={i} label={b} onPress={() => console.log(b)}/>
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