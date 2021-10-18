import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function App() {
  const renderItem = ({item}) => (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          borderBottomWidth: 1,
        }}>
        <View>
          <Text>Gopay top up {item.title}</Text>
          <Text>#123123123</Text>
          <Text>9 Apr, 9:30pm</Text>
        </View>
        <Text style={{fontSize: 24}}>RP 51000</Text>
      </View>
    </View>
  );
  return (
    <ScrollView style={{flex: 1, padding: 10}}>
      {/* Header */}
      <LinearGradient
        colors={['aqua', 'blue', '#89CFF0']}
        // start={{x: 0, y: 0}}
        // end={{x: 1, y: 0}}
        style={{borderRadius: 10}}>
        {/* </LinearGradient> */}
        <View
          style={{
            // backgroundColor: '#0dabd6',
            height: 150,
            borderRadius: 10,
            padding: 20,
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'rgba(255,255,255,0.2)',
              position: 'absolute',
              borderRadius: 100,
              right: 50,
              top: 50,
            }}></View>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'rgba(255,255,255,0.2)',
              position: 'absolute',
              borderRadius: 100,
              right: -10,
              top: -30,
            }}></View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'rgba(255,255,255,0.2)',
              position: 'absolute',
              borderRadius: 100,
              right: 70,
              bottom: -10,
            }}></View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'rgba(255,255,255,0.2)',
              position: 'absolute',
              borderRadius: 100,
              left: 70,
              top: 5,
              marginTop: 'auto',
              marginBottom: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}></View>
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
                style={{height: 50, width: 50}}
              />
            </View>

            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  // fontWeight: 'bold',
                  fontFamily: 'Beautiful',
                }}>
                Rangga Yudhistira Pratama
              </Text>
              <Text style={{color: '#fff'}}>Tap to see your Gojek profile</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

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
              // backgroundColor: 'transparant',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}></View>
        </View>
      </View>
      <View
        style={{
          margin: 20,
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{color: 'black', fontFamily: 'Afterglow', fontSize: 18}}>
              GoPay friends
            </Text>
            <Text style={{fontSize: 12}}>
              These are who last sent or requested GoPay to.
            </Text>
            <Text style={{fontSize: 12}}>Tap their name to send again</Text>
          </View>
          <Text style={{color: 'green'}}>See more</Text>
        </View>
        <View style={{marginTop: 5, flexDirection: 'row'}}>
          <View
            style={{width: 60, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#eef6ff',
                width: 50,
                height: 50,
                borderRadius: 100,
                overflow: 'hidden',
              }}>
              <Image
                // source={require('./Pennywise-icon.png')}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text style={{fontWeight: 'bold'}}>Dafa</Text>
          </View>
          <View
            style={{width: 60, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#eef6ff',
                width: 50,
                height: 50,
                borderRadius: 100,
              }}>
              <Image
                source={require('./Mike-icon.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text>Jo</Text>
          </View>
          <View
            style={{width: 60, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#eef6ff',
                width: 50,
                height: 50,
                borderRadius: 100,
              }}>
              <Image
                source={require('./Minion-Pig-icon.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text>Nanda</Text>
          </View>
          <View
            style={{width: 60, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#eef6ff',
                width: 50,
                height: 50,
                borderRadius: 100,
              }}>
              <Image
                source={require('./Zombie-PVZ-icon.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <Text>Nanang</Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          color: 'black',
          marginHorizontal: 20,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        History
      </Text>
      {/* <View style={{height: 100}}> */}
      {/* <FlatList
        data={[
          'Rangga',
          'Alianto',
          'Jo',
          'Nanda',
          'Nanang',
          'Bhagast',
          'Dzihni',
          'Dzihni',
          'Dzihni',
          'Dzihni',
        ]}
        renderItem={({item}) => {
          console.log('item ', item);
          return ( */}
      {[
        'Rangga',
        'Alianto',
        'Jo',
        'Nanda',
        'Nanang',
        'Bhagast',
        'Dzihni',
        'Glints',
        'Academy',
        'GA',
      ].map(e => {
        return (
          <View
            key={e}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              borderBottomWidth: 1,
            }}>
            <View>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Gopay top up {e}
              </Text>
              <Text style={{color: 'black'}}>#123123123123123</Text>
              <Text>9 Apr, 9:30pm</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'green', fontWeight: 'bold'}}>Rp</Text>
              <Text style={{fontSize: 24, color: 'green', fontWeight: 'bold'}}>
                51.000
              </Text>
            </View>
          </View>
        );
      })}

      {/* );
        }}
        keyExtractor={item => item.id}
      /> */}
      {/* <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              borderBottomWidth: 1,
            }}>
            <View>
              <Text>Gopay top up</Text>
              <Text>#123123123</Text>
              <Text>9 Apr, 9:30pm</Text>
            </View>
            <Text style={{fontSize: 24, color: 'green', fontWeight: 'bold'}}>
              RP 51000
            </Text>
          </View>
        </ScrollView> */}
      {/* </View> */}
    </ScrollView>
  );
}

const styles2 = StyleSheet.create({
  blue: {color: 'blue'},
});
