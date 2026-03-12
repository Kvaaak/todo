import * as Location from 'expo-location'
import { useEffect, useState } from 'react'

type WeatherData = {
  temp: number | null
  icon: string | null
  loading: boolean
  error: string | null
  city: string | null
}

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData>({
    temp: null,
    icon: null,
    loading: true,
    error: null,
    city: null
  })

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setWeather(prev => ({ ...prev, loading: false, error: 'Permission denied'}))
          return
        }
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        const API_KEY = "a04fde445477efcd45b8f40765ae7a26";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

        const res = await fetch(url);
        const data = await res.json();

        setWeather({
          temp: Math.round(data.main.temp),
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          loading: false,
          error: null,
          city: data.name,
        });
      } catch (e: any) {
        setWeather(prev => ({ ...prev, loading: false, error: e.message }));
      }
    })();
  }, []);
  return weather
}