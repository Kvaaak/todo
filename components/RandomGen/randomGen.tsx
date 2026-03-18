import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';


export default function RandomGen() {
  const ghosts = [
    'Banshee','Dayan','Demon','Deogen','Gallu',
    'Goryo','Hantu','Jinn','Mare','Moroi','Myling',
    'Obake','Obambo','Oni','Onryo','Phantom',
    'Poltergeist','Raiju','Revenant','Shade',
    'Spirit','Thaye','The Mimic','The Twins',
    'Wraith','Yokai','Yurei'
  ]
  const [ghost, setGhost] = useState('')

  const handleGeneration = () => {
    setGhost(ghosts[Math.floor(Math.random()*ghosts.length)])
  }
  return (
    <ThemedView style={styles.container}>

      <ThemedText style={styles.result}>
        {ghost}
      </ThemedText>

      <Pressable onPress={handleGeneration} style={styles.pressable}>
        <ThemedText>
          Generate a Ghost
        </ThemedText>
      </Pressable>

    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center'
  },
  pressable: {
    backgroundColor: '#aaa',
    padding: 35,
    borderRadius: 6,
  },
  result: {
    padding: 10,
    fontSize: 30,
    marginBottom: 100,
  },
});
