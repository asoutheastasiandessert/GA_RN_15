import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import Card from './Card';

export default function TodoApp() {
  const [title, setTitle] = useState([
    'Glints', //0
    'Academy', //1
    'Native', //2
    'React', //3
    'Native', //4
  ]);
  const [ketikan, setKetikan] = useState('Glints');

  return (
    <View>
      <FlatList
        data={title}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <Card
              data={item}
              deleteTodo={() => {
                const qwe = title.filter((item, i) => index !== i);
                setTitle(qwe);
              }}
            />
          );
        }}
        keyExtractor={(item, i) => i}
      />
      <TextInput
        style={{color: 'green'}}
        placeholder="asdasd"
        value={ketikan}
        onChangeText={e => {
          setKetikan(e);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          const asd = [...title];
          asd.push(ketikan);
          setTitle(asd);
        }}>
        <Text style={{fontSize: 24}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
