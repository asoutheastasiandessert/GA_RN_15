import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TodoApp from './TodoApp';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Test from './Test';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TodoApp" component={TodoApp} />
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  );
}

function BottomTabs() {
  return (
    <Bottom.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TodoApp">
      <Bottom.Screen name="TodoApp" component={TodoApp} />
      <Bottom.Screen name="Test" component={Test} />
    </Bottom.Navigator>
  );
}

function Stacks() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Menu" component={BottomTabs} />
    </Stack.Navigator>
  );
}

export default function Route() {
  return (
    <NavigationContainer>
      {/* <BottomTabs /> */}
      {/* <MyDrawer /> */}
      <Stacks />
    </NavigationContainer>
  );
}
