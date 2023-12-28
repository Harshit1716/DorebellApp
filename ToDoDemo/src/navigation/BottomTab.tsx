import * as React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomHeader from '../components/CustomHeader';
import {Home, ScanSetup, Settings} from '../screens';
import {COLORS} from '../resources';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          header: () => <CustomHeader />,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ScanSetup" component={ScanSetup} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.primaryLight}
        translucent={true}
      />
    </View>
  );
}
