import React, {useMemo, useState} from 'react';
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

export default function TodoApp() {
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

  return (
    <View>
      <TextInput
        style={{color: 'green'}}
        placeholder="Type your Todo here"
        value={todo}
        onChangeText={e => {
          setTodo(e);
        }}
      />
      <TextInput
        style={{color: 'green'}}
        placeholder="Type your Description here"
        value={description}
        onChangeText={e => {
          setDescription(e);
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          onPress={() => {
            setStatus('Completed');
          }}
          style={{
            padding: 10,
            backgroundColor: status == 'Completed' ? '#20cb9d' : '#fafafa',
          }}>
          <Text
            style={{
              color: status == 'Completed' ? 'white' : 'black',
            }}>
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStatus('Open');
          }}
          style={{
            padding: 10,
            backgroundColor: status == 'Open' ? '#20cb9d' : '#fafafa',
          }}>
          <Text
            style={{
              color: status == 'Open' ? 'white' : 'black',
            }}>
            Open
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={{color: 'green'}}
        placeholder="Type your Avatar here"
        value={avatar}
        onChangeText={e => {
          setAvatar(e);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          if (
            todo.length == 0 ||
            description.length == 0 ||
            status.length == 0 ||
            avatar.length == 0
          ) {
            Alert.alert('Fill all data');
          } else {
            const asd = [...title]; // copy array sebelumnya
            const newData = {
              todo: todo,
              description: description,
              status: status,
              avatar: avatar,
            };
            asd.push(newData); // tambahkan value ketikan ke array
            setTitle(asd); // ganti value title dengan data baru
            setTodo('');
            setDescription('');
            setStatus('');
            setAvatar('');
          }
        }}>
        <Text style={{fontSize: 24}}>Submit</Text>
      </TouchableOpacity>
      <FlatList
        data={title}
        style={{margin: 10}}
        numColumns={1}
        // columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
        renderItem={data => (
          <Card
            data={data.item}
            deleteTodo={() => {
              const qwe = title.filter((item, i) => data.index !== i);
              setTitle(qwe);
            }}
          />
        )}
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
