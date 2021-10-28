import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function SignIn() {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ImageBackground
        style={{flex: 2, elevation: 20}}
        source={require('./asd.jpeg')}>
        <View
          style={{
            flex: 2,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View style={{position: 'absolute', top: 30}}>
            <Text style={{fontFamily: 'Fabled', fontSize: 50}}>Login </Text>
          </View>
          <View
            style={{
              height: 250,
              width: '80%',
              backgroundColor: 'white',
              elevation: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 80,
                width: 80,
                backgroundColor: 'white',
                elevation: 10,
                position: 'absolute',
                top: -40,
                borderRadius: 50,
                overflow: 'hidden',
              }}>
              <Image
                source={require('./logo-og.png')}
                style={{height: 80, width: 80}}
              />
            </View>
            <TextInput
              placeholder="Username"
              style={{
                borderWidth: 1,
                width: '90%',
                borderColor: 'gray',
                borderRadius: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                width: '90%',
                borderColor: 'gray',
                borderRadius: 10,
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <TextInput placeholder="Password" secureTextEntry />
              <Entypo name="eye" style={{marginRight: 10}} />
            </View>
            <Text style={{marginTop: 10, color: '#20cb9d', fontWeight: 'bold'}}>
              JOIN US
            </Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: -10,
                backgroundColor: '#0ed2ab',
                width: 100,
                alignItems: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                elevation: 10,
              }}>
              <Text style={{color: 'white'}}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0ed2ab',
        }}>
        <View
          style={{
            backgroundColor: '#fafafa',
            width: 100,
            height: 100,
            position: 'absolute',
            top: -50,
            borderRadius: 100,
            transform: [{scaleX: 5}, {scaleY: 2}],
          }}></View>
        <Text style={{color: 'white'}}>Reset Password</Text>
      </View>
    </View>
  );
}
