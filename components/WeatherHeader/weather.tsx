import { useWeather } from '@/hooks/useWeather'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { ThemedText } from '../themed-text'

type Props = {
  title: string
}

export default function Weather({ title }: Props) {
  const { temp, icon, loading, city } = useWeather();

  if (loading) return (
    <View style={styles.container}>
      <ThemedText>
        {title}
      </ThemedText>
    </View>
  )

  return (
    <View style={styles.container}>
      <ThemedText>
        {title}
      </ThemedText>
      <View style={styles.weatherContainer}>
        {city && <ThemedText style={styles.city}>{city}</ThemedText>}
        {icon && <Image source={{ uri: icon }} style={styles.icon} />}
        {temp !== null && <ThemedText style={styles.temp}>{temp}°C</ThemedText>}
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  temp: {
    fontSize: 16,
    marginRight: 6,
  },
    weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  city: {
  fontSize: 14,
  marginLeft: 4,
  }
})