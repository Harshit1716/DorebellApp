import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../resources';

const Loader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        flex: 1,
        height: SIZES.height,
        width: SIZES.width,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: SIZES.height * 0.15,
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.primary,
          borderRadius: 20,
          borderColor: '#3912741A',
          margin: 20,
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 2},
          shadowOpacity: 0.4,
          shadowRadius: 3,
        }}>
        <ActivityIndicator size="large" color={COLORS.white} />
        <Text style={{color: COLORS.white, marginTop: 10, ...FONTS.h3m}}>
          Loading....
        </Text>
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
