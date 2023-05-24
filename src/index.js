import { View, Text, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import * as Location from 'expo-location'

const openWeatherKey = '36d27fc4a354ee22fad96e3c9e975575'
let url = 'http://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=minutely&appid='+ openWeatherKey;


const Weather = () => {
    const [forecast, setForcast] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const loadForecast  = async () => {
        setRefreshing(true);
        const {status} = await Location.requestPermissionsAsync();
        if(status !== 'granted') {
            Alert.alert('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});

        //fetching weather data
        
    }
  return (
    <View>
      <Text>Weather</Text>
    </View>
  )
}

export default Weather