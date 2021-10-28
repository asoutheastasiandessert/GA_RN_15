import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

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
  console.log('data ', data);
  return (
    <View
      style={{
        // backgroundColor: color[Math.floor(Math.random() * color.length)],
        backgroundColor: '#fafafa',
        // height: 40,
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
          justifyContent: 'center',
          backgroundColor: 'orange',
          width: 50,
          alignItems: 'center',
        }}>
        <Image source={{uri: data.avatar}} style={{height: 40, width: 40}} />
      </View>
      <View style={{flex: 1}}>
        <View>
          <Text
            style={{
              color: 'white',
              backgroundColor: 'black',
              textAlign: 'center',
            }}>
            {data.todo}
          </Text>
          <View style={{paddingVertical: 10}}>
            <Text style={{}}>{data.description}</Text>
          </View>
          <Text>Status: {data.status}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          backgroundColor: 'yellow',
          // paddingHorizontal: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => deleteTodo()}>
        <Text style={{color: 'black'}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
