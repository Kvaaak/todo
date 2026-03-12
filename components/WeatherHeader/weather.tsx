import React from 'react'
import { StyleSheet } from 'react-native'
import { ThemedText } from '../themed-text'
import { ThemedView } from '../themed-view'

const Weather = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.temp}>
        Weather
      </ThemedText>
      
    </ThemedView>
  )
}

export default Weather

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temp: {
    fontSize: 16,
    marginRight: 6,
  },
  icon: {
    width: 20,
    height: 20,
  }
})