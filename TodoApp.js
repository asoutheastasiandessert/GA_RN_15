import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function TodoApp() {
  const [title, setTitle] = useState([
    'Glints', //0
    'Academy', //1
    'Native', //2
    'React', //3
    'Native', //4
  ]);
  const [ketikan, setKetikan] = useState('');

  return (
    <View>
      {title.map((e, i) => {
        return (
          <View key={i} style={{flexDirection: 'row'}}>
            <Text
              style={{color: 'orange', fontSize: 34, fontFamily: 'BLOBBER'}}>
              {e}
            </Text>
            <TouchableOpacity
              onPress={() => {
                const qwe = title.filter((item, index) => index !== i);
                setTitle(qwe);
              }}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        );
      })}
      <TextInput
        style={{color: 'green'}}
        placeholder="asdasd"
        placeholderTextColor="red"
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
        <Text style={{fontFamily: 'Fabled', fontSize: 24}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
