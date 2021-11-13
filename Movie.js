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
import {fetchMovie, gantiNama, simpanMovieId} from './redux/action/UserAction';
import {fetchMovie2} from './redux/action/asd';
import SelectDropdown from 'react-native-select-dropdown';
const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

export default function TodoApp({navigation}) {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchMovie());
  }, []);

  console.log('user ', user);
  return (
    <View>
      <TouchableOpacity onPress={() => {}}>
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
                onPress={() => {
                  navigation.navigate('DetailMovie', {movieId: data.item.id});
                  dispatch(simpanMovieId(data.item.id));
                }}>
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
