import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { ThemedView } from '../themed-view'

type Props = {
  onChoice: (choice: 'rock' | 'paper' | 'scissors' ) => void
}

const RpsPlayerInput = ({onChoice}: Props) => {

  const handlePress = (choice: 'rock' | 'paper' | 'scissors' ) => {
    onChoice(choice)
  }

  return (
    <ThemedView style={styles.card}>
      <Pressable style={styles.pressable} onPress={() => handlePress('rock')}>
        <FontAwesome5 name="hand-rock" size={24} color='#880000' />
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => handlePress('paper')}>
          <FontAwesome5 name="hand-paper" size={24} color='#880000' />
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => handlePress('scissors')}>
        <FontAwesome5 name="hand-scissors" size={24} color='#880000' style={{transform: [{rotate: '90deg'}, {scaleY: -1}]}} />
      </Pressable>
    </ThemedView>
  )
}

export default RpsPlayerInput

const styles = StyleSheet.create({
    card: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: '#b30000',
  },
  pressable: {
    backgroundColor: '#ffcaca',
    padding: 35,
    borderRadius: 6,
  }
})