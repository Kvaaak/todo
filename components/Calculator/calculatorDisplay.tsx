import React from 'react'
import { StyleSheet } from 'react-native'
import { ThemedText } from '../themed-text'
import { ThemedView } from '../themed-view'

type CalculatorDisplayProps =  {
  equation: string
  result: string
}

export default function CalculatorDisplay({equation, result}: CalculatorDisplayProps) {



  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.equation} numberOfLines={1} adjustsFontSizeToFit>
        {equation || '0'}
      </ThemedText>
      <ThemedText style={styles.result}>
        {result}
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
    lineHeight: 52,
    textAlign: 'right'
  },
  result: {
    padding: 16,
    fontSize: 36,
    color: '#aaa',
    marginBottom: 20,
  }
})