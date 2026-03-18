import Feather from "@expo/vector-icons/Feather";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";

type CalculatorButtonProps = {
  value: string 
  onPress: (value: string) => void
}

export default function CalculatorButton({ value, onPress }: CalculatorButtonProps) {
  return (
    <Pressable onPress={() => onPress(value)} style={styles.pressable}>
      {value === 'DEL' ? (
        <Feather name="delete" size={24} color="black" />
      ) : (
        <ThemedText style={styles.text}>{value}</ThemedText>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    width:'23%',
    margin: '1%', 
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#aaa',
    borderRadius: 6,
  },
  text: {
    fontSize: 30,
    color: '#000'
  },
});