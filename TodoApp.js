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
  const [ketikan, setKetikan] = useState('');
  // const [todo, setTodo] = useState([
  //   {name: 'rangga', age: 12},
  //   {name: 'rangga', age: 12},
  //   {name: 'rangga', age: 12},
  // ]);
  const [todo, setTodo] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [avatar, setAvatar] = useState('');
  const [movies, setMovies] = useState([]);

  const user = useSelector(state => state.user);

  console.log('movies ', movies);

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://api.themoviedb.org/3/movie/now_playing?api_key=570c36d75740509c00d865a804d826a5&language=en-US&page=1',
  //     )
  //     .then(e => {
  //       console.log('e 3', e);
  //       setMovies(e.data.results);
  //     });
  // }, []);

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

      <Text>{user.name}</Text>

      <TextInput
        value={user.name}
        onChangeText={e => {
          setTodo(e);
          dispatch(gantiNama(e));
        }}
        placeholder="Nama"
      />

      <FlatList
        data={movies}
        style={{margin: 10}}
        numColumns={1}
        renderItem={data => {
          console.log('data ', data);
          return (
            <ImageBackground
              source={{
                uri: `https://image.tmdb.org/t/p/w500${data.item.poster_path}`,
              }}
              style={{
                marginBottom: 10,
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 24,
                  textAlign: 'center',
                }}>
                {data.item.title}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'justify',
                }}>
                {data.item.overview}
              </Text>
            </ImageBackground>
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
