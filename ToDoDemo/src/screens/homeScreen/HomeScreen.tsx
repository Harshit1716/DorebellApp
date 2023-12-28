import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS, ICONS, SIZES} from '../../resources';
import CustomCard from '../../components/CustomCard';

const HomeScreen = ({navigation}: any) => {
  Alert.alert('HOME');
  return (
    <ScrollView style={styles.container}>
      <View style={{...styles.container}}>
        {/* Profile View */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            marginTop: '5%',
            paddingBottom: '3%',
            borderBottomWidth: 0.8,
            borderBottomColor: COLORS.lightGray,
          }}>
          <View style={{width: '80%'}}>
            <Text style={{...FONTS.h2}}>Hello Joanne!</Text>
            <Text style={{...FONTS.body4}}>
              Welcome to Doorbell QR, your friendly neighbourhood security
            </Text>
          </View>
          <Image
            style={{height: 70, width: 70, borderRadius: 70}}
            resizeMode="contain"
            source={ICONS.PROFILE_ICON}
          />
        </View>
        <View
          style={{
            marginTop: '30%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CustomCard
            imageSource={ICONS.SETUP_QR_ICON}
            title={'Lets setup your Doorbell'}
            description={
              'You can download, print and paste your QR on your door. '
            }
            onPress={() => {
              Alert.alert('Comming Soon');
            }}
          />
          <CustomCard
            imageSource={ICONS.SCAN_QR_ICON}
            title={'Scan Doorbell QR'}
            description={'Scan Doorbell QR to knock on the door.'}
            onPress={() => {
              Alert.alert('Comming Soon');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  registerNowText: {
    marginLeft: 4,
    color: COLORS.primary,
    ...FONTS.bodySemi4,
  },
  noAccContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 22,
  },
  container: {
    flex: 1,
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.white,
  },
  signInText: {
    ...FONTS.h2,
    // marginTop: 12,
    color: COLORS.black,
  },
  desText: {
    ...FONTS.body4,
    marginTop: 12,
    color: COLORS.black,
  },
});
