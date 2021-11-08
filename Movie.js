import axios from 'axios';
import React, {useMemo, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Card from './Card';
import Kartu from './Kartu';
import {gantiNama} from './redux/action/UserAction';

export default function TodoApp({navigation}) {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  const user = useSelector(state => state.user);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          fetch(
            'https://api.themoviedb.org/3/movie/now_playing?api_key=570c36d75740509c00d865a804d826a5&language=en-US&page=1',
          )
            .then(e => {
              console.log('e 1', e);
              return e.json();
            })
            .then(e => {
              console.log('e 2', e);
            });
          axios
            .get(
              'https://api.themoviedb.org/3/movie/now_playing?api_key=570c36d75740509c00d865a804d826a5&language=en-US&page=1',
            )
            .then(e => {
              console.log('e 3', e);
              setMovies(e.data.results);
            });
        }}>
        <Text>GET MOVIE</Text>
      </TouchableOpacity>

      <FlatList
        data={movies}
        style={{margin: 10}}
        numColumns={1}
        renderItem={data => {
          console.log('data ', data);
          return (
            <View style={{marginBottom: 10}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailMovie', {movieId: data.item.id})
                }>
                <Text>{data.item.title}</Text>
                <Text>{data.item.id}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item, i) => i}
      />
      {/* <FlatList
        data={title}
        numColumns={2}
        style={{margin: 10}}
        renderItem={({item, index}) => (
          <Kartu
            nama={item}
            hapus={() => {
              const qwe = title.filter((item, i) => index !== i);
              setTitle(qwe);
            }}
          />
        )}
        keyExtractor={(item, index) => index}
      /> */}
    </View>
  );
}
