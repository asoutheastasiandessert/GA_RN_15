import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

export default function Card({data}) {
  // console.log('data ', data);
  return (
    <ImageBackground
      source={{uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`}}
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
      <View style={{flex: 1}}>
        <View>
          <Text
            style={{
              color: 'white',
              backgroundColor: 'black',
              textAlign: 'center',
              fontSize: 24,
            }}>
            {data.title}
          </Text>
          <View style={{paddingVertical: 10}}>
            <Text style={{color: 'white'}}>{data.overview}</Text>
          </View>
          <Text>Release: {data.release_date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
