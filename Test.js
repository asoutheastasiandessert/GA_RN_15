import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default function Test({navigation}) {
  const [query, setQuery] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <View>
      <Text>Search movie</Text>
      <TextInput
        name={query}
        onChangeText={e => setQuery(e)}
        placeholder="Type a movie"
      />
      {loading == true && <Text>Loading... Please wait..</Text>}
      <TouchableOpacity
        onPress={() => {
          if (query.length > 0) {
            setLoading(true);
            axios
              .get(
                `https://api.themoviedb.org/3/search/movie?api_key=570c36d75740509c00d865a804d826a5&language=en-US&query=${query}&page=1&include_adult=false`,
              )
              .then(e => {
                console.log('e ', e);
                setSearchMovie(e.data.results);
                setLoading(false);
              });
          } else {
            Alert.alert('Type some movie name');
          }
        }}>
        <Text>FIND!</Text>
      </TouchableOpacity>
      {searchMovie.length > 0 && (
        <TouchableOpacity onPress={() => setSearchMovie([])}>
          <Text>Clear movie</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={searchMovie}
        renderItem={data => {
          return (
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailMovie', {movieId: data.item.id})
                }>
                <Text>{data.item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
