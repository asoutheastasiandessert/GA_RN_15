import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Kartu(props) {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        flexDirection: 'row',
        flex: 1 / 2,
        marginVertical: 10,
        height: 30,
        borderWidth: 2,
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: 'green',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white'}}>{props.nama}</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}
        onPress={() => props.hapus()}>
        <Text style={{color: 'black'}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
