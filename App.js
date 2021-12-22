import React, { useState } from 'react';
import {Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {useOrientation} from "./hooks/useOrientation";

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="DrawerNavigatorStack"
        screenOptions={{
          headerShown: false
        }}
      >
        <RootStack.Screen name="DrawerNavigatorStack" component={DrawerNavigatorStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigatorStack({ route }) {
  const Orientation = useOrientation()

  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        drawerStyle: {
          width: 400,
          backgroundColor: 'pink',
          borderRightWidth: 1,
          borderRightColor: 'gray',
        },
        drawerType: Orientation === 'PORTRAIT' ? 'front' : 'permanent',
        gestureEnabled: true,
        headerShown: true
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen</Text>
    </View>
  )
}
