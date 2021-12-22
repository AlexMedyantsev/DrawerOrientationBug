import React, { useState } from 'react';
import {Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Orientation, { useDeviceOrientationChange } from 'react-native-orientation-locker';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen</Text>
    </View>
  )
}

function DrawerNavigatorStack({ route }) {
  const [currentOrientation, setOrientation] = useState(Orientation.getInitialOrientation());

  useDeviceOrientationChange(() => {
    Orientation.getOrientation((orientation) => {
      setOrientation(orientation);
    });
  });

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
        drawerType: currentOrientation === 'PORTRAIT' ? 'front' : 'permanent',
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
