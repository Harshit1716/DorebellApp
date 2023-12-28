import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import {COLORS, ICONS, SIZES, FONTS} from '../resources';

const CustomHeader = () => (
  <View style={styles.headerContainer}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={ICONS.NOTIFICATION_ICON}
        style={styles.headerImg}
        resizeMode="contain"
      />
      <Text style={{...FONTS.h3}}>DOREBELL</Text>
    </View>
  </View>
);

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: SIZES.height * 0.11,
    marginTop: Platform.OS == 'android' ? 10 : 0,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: '5%',
    paddingBottom: '3%',
  },
  headerImg: {
    height: 25,
    width: 25,
    marginRight: 8,
  },
});
