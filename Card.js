import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//destruction object

const color = [
  'red',
  'blue',
  'green',
  'orange',
  'purple',
  'brown',
  'gray',
  'violet',
  'chartreuse',
  'crimson',
  'cyan',
  'darkblue',
  'indigo',
  'khaki',
  'tomato',
  'tan',
  'teal',
  'skyblue',
  'silver',
];

export default function Card({data, deleteTodo}) {
  return (
    <View
      style={{
        backgroundColor: color[Math.floor(Math.random() * color.length)],
        height: 40,
        // width: '40%',
        flex: 0.5,
        // margin: 10,
        marginBottom: 10,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>{data}</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          paddingHorizontal: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => deleteTodo()}>
        <Text style={{color: 'black'}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
