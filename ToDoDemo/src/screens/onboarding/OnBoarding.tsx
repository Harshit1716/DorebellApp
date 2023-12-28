import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../resources';

const OnBoarding = ({navigation}: any) => {
  // component to show the dots at the bottom
  const btnComponent = () => {
    return (
      <View style={styles.dotContainer}>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <View
              key={index + ''}
              style={{
                height: index == 3 ? 15 : 10,
                width: index == 3 ? 15 : 10,
                borderRadius: index == 3 ? 15 : 10,
                backgroundColor: index == 3 ? COLORS.primary : COLORS.lightGray,
                margin: 5,
              }}
            />
          );
        })}
      </View>
    );
  };
  return (
    // <ScrollView style={{height: SIZES.height, width: SIZES.width}}>
    <View style={styles.container}>
      <Text style={{...FONTS.h1}}>Ring the Bell</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id potenti nisl
        tellus vestibulum dictum luctus cum habitasse augue. Convallis vitae,
        dictum justo, iaculis id. Cras a ac augue netus egestas semper varius
        facilisis id.
      </Text>
      <View>{btnComponent()}</View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.signInBtn}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={styles.registerBtn}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ScrollView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    height: SIZES.height,
    width: SIZES.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    ...FONTS.body4,
    textAlign: 'center',
    paddingHorizontal: '5%',
    marginTop: 10,
  },
  btnContainer: {
    marginTop: '10%',
    borderRadius: 10,
    width: '90%',
    height: '7%',
    flexDirection: 'row',
    overflow: 'hidden',
    // backgroundColor: COLORS.black,
  },
  signInBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.mainBlack,
  },
  registerBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  btnText: {
    textAlign: 'center',
    ...FONTS.h3,
    color: COLORS.white,
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: '7%',
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
