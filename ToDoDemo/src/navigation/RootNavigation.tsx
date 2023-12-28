import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EditProfile,
  Home,
  ManageAddress,
  Settings,
  Subscription,
} from '../screens';
import AuthNavigation from './AuthStack';
import BottomTab from './BottomTab';
import EditAddress from '../screens/manageAddress/EditAddress';
import CustomBottomTab from './CustomBottomTab';

const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="AuthNavigation" component={AuthNavigation} />
        <RootStack.Screen name="AppNavigation" component={CustomBottomTab} />
        <RootStack.Screen name="Address" component={ManageAddress} />
        <RootStack.Screen name="EditAddress" component={EditAddress} />
        <RootStack.Screen name="Subscription" component={Subscription} />
        <RootStack.Screen name="Settings" component={Settings} />
        <RootStack.Screen name="EditProfile" component={EditProfile} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
