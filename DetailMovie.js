import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import axios from 'axios';

export default function DetailMovie(props) {
  console.log('props ', props);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/' +
          props.route.params.movieId +
          '?api_key=570c36d75740509c00d865a804d826a5&language=en-US',
      )
      .then(e => {
        console.log('e ', e);
        setMovie(e.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);

  if (loading === true) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading... Please wait..</Text>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View>
      <Text>Detail</Text>
      <Text>Movie ID : {props.route.params.movieId}</Text>
      <Text>ID: {movie.id} </Text>
    </View>
  );
}
