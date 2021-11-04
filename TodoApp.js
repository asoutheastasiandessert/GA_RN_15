import React, {useMemo, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Card from './Card';
import Kartu from './Kartu';
import {gantiNama} from './redux/action/UserAction';

export default function TodoApp({navigation}) {
  const dispatch = useDispatch();
  const [ketikan, setKetikan] = useState('');
  const [todo, setTodo] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [avatar, setAvatar] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // console.log('123');
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=570c36d75740509c00d865a804d826a5&language=en-US&page=1',
    )
      .then(async e => {
        // console.log('e 1 ', e);
        return e.json();
      })
      .then(e => {
        // console.log('e 2 ', e);
        setMovies(e.results);
      });
  }, []);

  const user = useSelector(state => state.user);

  console.log('user ', user);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text>Logout</Text>
      </TouchableOpacity>

      <Text>{user.name}</Text>

      <TextInput
        value={user.name}
        onChangeText={e => {
          // setTodo(e)
          dispatch(gantiNama(e));
        }}
        placeholder="Nama"
      />

      <FlatList
        data={movies}
        style={{margin: 10}}
        numColumns={1}
        renderItem={data => <Card data={data.item} />}
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
