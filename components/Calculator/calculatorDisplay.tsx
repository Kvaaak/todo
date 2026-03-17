import React from 'react'
import { StyleSheet } from 'react-native'
import { ThemedText } from '../themed-text'
import { ThemedView } from '../themed-view'

export default function CalculatorDisplay() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.equation}>
        √123+456÷789
      </ThemedText>
      <ThemedText style={styles.result}>
        11,6684832745
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  equation: {
    marginTop: 70,
    fontSize: 48,
    padding: 16,
  },
  result: {
    padding: 16,
    fontSize: 36,
    color: '#aaa',
    marginBottom: 20,
  }
})