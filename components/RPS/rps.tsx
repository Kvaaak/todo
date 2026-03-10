import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { ThemedText } from '../themed-text'
import { ThemedView } from '../themed-view'
import RpsPlayerInput from './rpsPlayerInput'

const RpsPlayerResult = ({ onReset }: { onReset: () => void }) => {
  return (
    <ThemedView style={styles.card}>
        <Pressable onPress={onReset}>
          <ThemedText style={styles.reset}>
            Reset
          </ThemedText>
        </Pressable>
    </ThemedView>
  )
}

const components = {
  play: RpsPlayerInput,
  result: RpsPlayerResult,
}

const winsAgainst = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
}

const RPS = () => {
  const [gameState, setGameState] = useState<'play' | 'result'>('play')
  const [playerChoice, setPlayerChoice] = useState<'rock'|'paper'|'scissors'|null>(null);
  const Component = components[gameState]
  const [ cpuScore, setCpuScore] = useState(0)
  const [ playerScore, setPlayerScore] = useState(0)
  const [cpuChoice, setCpuChoice] = useState<'rock'|'paper'|'scissors'|null>(null);
  const [winner, setWinner] = useState<'CPU' | 'YOU' | 'Neither' | null>(null)
  const opponentName = 'CPU'
  const playerName = 'YOU'

  type Choice = 'rock' | 'paper' | 'scissors'

  const checkWinner = (playerChoice: Choice, cpuChoice: Choice) => {
    if (playerChoice === cpuChoice) {
      setWinner('Neither')
    } else if (winsAgainst[playerChoice] === cpuChoice) {
      setWinner('YOU')
      setPlayerScore(s => s + 1)
    } else {
      setWinner('CPU')
      setCpuScore(s => s + 1)
    }
  }

  useEffect(() => {
    if (playerChoice !== null) {
      const choices = ['rock', 'paper', 'scissors'] as const
      const cpuChoice = choices[Math.floor(Math.random()*3)]
      setCpuChoice(cpuChoice)
      console.log("Player made a choice:", playerChoice)
      console.log("CPU made a choice:", cpuChoice )
      checkWinner(playerChoice, cpuChoice)
      setGameState('result')
    }
  }, [playerChoice])

  const handleStart = async () => {
    setGameState('play')
    setPlayerChoice(null)
    setCpuChoice(null)
  }

  return (
    <ThemedView style={styles.container}>

      <ThemedView style={styles.cpu}>
        <ThemedText style={{color: '#fff'}}>
          {opponentName}
        </ThemedText>

        <ThemedText style={styles.results}>
          {cpuChoice === null? 'Thinking...' : `I chose ${cpuChoice}.\nYou chose ${playerChoice}. \n\n${winner} won`}
        </ThemedText>

      </ThemedView>

      <ThemedView style={styles.score}>
        <ThemedText>
          {opponentName}  {cpuScore}
        </ThemedText>
        <ThemedText>
          {playerScore}  {playerName}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.player}>
        <ThemedText style={{color: '#fff'}}>
          {playerName}
        </ThemedText>

        <Component onChoice={setPlayerChoice} onReset={handleStart}/>

      </ThemedView>

    </ThemedView>
  )
}

export default RPS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  player: {
    flex: 1,
    padding: 10,
    margin: 6,
    borderRadius: 6,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#b30000',
  },
  cpu: {
    flex: 1,
    padding: 10,
    margin: 6,
    borderRadius: 6,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#0c00b3',
  },
  score: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 10,
    
  },
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
  },
  results: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#fff',
  },
  reset: {
    padding: 20, 
    borderWidth: 1, 
    borderRadius: 6,
    borderColor:'#ffcaca', 
    color: '#fff'
  }
})