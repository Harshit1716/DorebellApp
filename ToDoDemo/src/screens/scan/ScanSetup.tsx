import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, ICONS, SIZES, FONTS} from '../../resources';
import CustomButton from '../../components/CustomButton';

const ScanSetup = ({navigation}: any) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{...styles.container}}>
        <Text style={styles.headerText}>Joanne Weasley</Text>
        <View
          style={{
            alignSelf: 'center',
            padding: '5%',
            borderWidth: 2,
            marginBottom: '2%',
          }}>
          <Image
            resizeMode="contain"
            style={{height: 230, width: 230}}
            source={ICONS.QR_ICON}
          />
        </View>
        <CustomButton
          onPress={() => {
            // navigation.navigate('AppNavigation');
          }}
          leftImage={ICONS.DOWNLOAD_PAPER_ICON}
          title="Download QR Code"
          borderColor={COLORS.mainBlack}
          filled
          color={COLORS.mainBlack}
          style={{
            marginTop: 18,
            marginBottom: 4,
            width: '90%',
            alignSelf: 'center',
          }}
        />
        <CustomButton
          onPress={() => {
            // navigation.navigate('AppNavigation');
          }}
          leftImage={ICONS.BAG_ICON}
          title="Print/Order QR Code"
          borderColor={COLORS.primary}
          filled
          color={COLORS.primary}
          style={{
            marginTop: 18,
            marginBottom: 4,
            width: '90%',
            alignSelf: 'center',
            marginTop: 5,
          }}
        />
        <View
          style={{
            marginHorizontal: '5%',
            height: 0.8,
            marginTop: '2%',
            backgroundColor: COLORS.lightGray,
          }}></View>
        <View
          style={{
            marginTop: '8%',
            paddingHorizontal: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '65%'}}>
            <Text style={{...FONTS.h3}}>Home Address</Text>
            <Text style={{...FONTS.body5}}>
              77 Botley Road, Middle Winterslow, SP5 3YN, United Kingdom
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Address');
            }}>
            <Text
              style={{
                ...FONTS.body4,
                fontWeight: 'bold',
                color: COLORS.primary,
              }}>
              Manage
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.white,
  },
  headerText: {
    ...FONTS.body2,
    fontWeight: '500',
    marginVertical: '6%',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default ScanSetup;
