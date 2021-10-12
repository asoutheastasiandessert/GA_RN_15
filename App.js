import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  return (
    <View style={{flex: 1, padding: 10}}>
      {/* Header */}
      <View
        style={{
          backgroundColor: '#0dabd6',
          height: 150,
          borderRadius: 10,
          padding: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome name="chevron-left" size={20} color="#fff" />
            <Entypo
              name="wallet"
              size={20}
              color="#fff"
              style={{marginHorizontal: 10}}
            />

            <Text
              style={{
                fontSize: 20,
                color: '#000',
                fontWeight: 'bold',
              }}>
              Gopay
            </Text>
          </View>
          <Entypo name="dots-three-horizontal" size={20} color="#fff" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: '#fff',
              borderRadius: 100,
              overflow: 'hidden',
            }}>
            <Image
              source={require('./avatar.png')}
              width={50}
              height={50}
              style={{height: 50, width: 50}}
            />
          </View>

          <View style={{marginLeft: 10}}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              Dont Ario Rafly
            </Text>
            <Text style={{color: '#fff'}}>Tap to see your Gojek profile</Text>
          </View>
        </View>
      </View>
      {/* Body */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <MaterialCommunityIcons
              name="arrow-up-bold-box"
              size={30}
              color="#fff"
            />
          </View>
          <Text style={{fontWeight: 'bold', color: '#000', fontSize: 15}}>
            Pay
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <FontAwesome name="plus-square" size={25} color="#fff" />
          </View>
          <Text style={{fontWeight: 'bold', color: '#000', fontSize: 15}}>
            Top up
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <MaterialCommunityIcons
              name="arrow-down-bold-box"
              size={30}
              color="#fff"
            />
          </View>
          <Text style={{fontWeight: 'bold', color: '#000', fontSize: 15}}>
            Request
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <Ionicons name="send" size={30} color="#fff" />
          </View>
          <Text style={{fontWeight: 'bold', color: '#000', fontSize: 15}}>
            PayLater
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <FontAwesome5 name="hand-holding-usd" size={25} color="#fff" />
          </View>
          <Text style={{fontWeight: 'bold', color: '#000', fontSize: 15}}>
            Cash out
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <Entypo
              name="wallet"
              size={25}
              color="#fff"
              style={{marginHorizontal: 10}}
            />
          </View>
          <Text style={{fontWeight: 'bold', color: '#000', fontSize: 15}}>
            Plus
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <MaterialCommunityIcons name="receipt" size={25} color="#fff" />
          </View>

          <Text
            style={{
              fontWeight: 'bold',
              color: '#000',
              fontSize: 15,
              flexWrap: 'wrap',
            }}>
            Tagihan
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}></View>
        </View>
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  blue: {color: 'blue'},
});
