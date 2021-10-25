import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import Card from './Card';
import Kartu from './Kartu';

export default function TodoApp() {
  const [title, setTitle] = useState([
    'Glints', //0
    'Academy', //1
    'Native', //2
    'React', //3
    'Native', //4
    'Rangga',
    'Yudhistira',
  ]);
  const [ketikan, setKetikan] = useState('');

  return (
    <View>
      <TextInput
        style={{color: 'green'}}
        placeholder="Type your Todo here"
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
      {/* <FlatList
        data={title}
        style={{margin: 10}}
        numColumns={2}
        columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
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
      /> */}
      {/* {title.map((e, i) => {
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
       */}
      <FlatList
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
      />
    </View>
  );
}
