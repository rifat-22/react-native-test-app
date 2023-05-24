import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const openWeatherKey = '36d27fc4a354ee22fad96e3c9e975575'
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid='+openWeatherKey +'&units=metric';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.textContainer}>
        <Text style={styles.text}>{data.coord.lat}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default MyComponent;
