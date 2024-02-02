import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Onboarding, Register} from '../screens';
import {COLORS} from '../resources';
import {ForgetPassword} from '../screens';

const AuthStack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="Onboarding" component={Onboarding} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
        <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
      </AuthStack.Navigator>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.white}
        translucent={true}
      />
    </View>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
