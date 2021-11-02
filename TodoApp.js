import React, {useMemo, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import Card from './Card';
import Kartu from './Kartu';

export default function TodoApp({navigation}) {
  const [title, setTitle] = useState([
    {
      todo: 'Walking',
      description: 'walk',
      status: 'open',
      avatar:
        'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
    },
    {
      todo: 'Running',
      description: 'run',
      status: 'done',
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png',
    },
    {
      todo: 'Sitting',
      description: 'sit',
      status: 'open',
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/boy-avatar-4-1129037.png',
    },
  ]);
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
      .then(e => {
        console.log('e 1 ', e);
        return e.json();
      })
      .then(e => {
        console.log('e 2', e);
        setMovies(e.results);
      });
  }, []);

  console.log('movies ', movies);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text>Logout</Text>
      </TouchableOpacity>

      <TextInput value={todo} onChangeText={e => setTodo(e)} />

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
