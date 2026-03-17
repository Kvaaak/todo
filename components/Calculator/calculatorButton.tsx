import Feather from "@expo/vector-icons/Feather";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";

type Props = {
  label: string;
  onPress: () => void;
};

export default function CalculatorButton({ label, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.pressable}>
      {label === 'DEL' ? (
        <Feather name="delete" size={24} color="black" />
      ) : (
      <ThemedText style={styles.text}>{label}</ThemedText>
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