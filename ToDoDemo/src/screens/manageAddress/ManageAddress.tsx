import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {COLORS, ICONS, SIZES, FONTS} from '../../resources';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';

const ManageAddress = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: COLORS.primaryLight,
            width: '90%',
            padding: '5%',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: '7%',
            flexDirection: 'row',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 70, width: 70, borderRadius: 70, marginRight: 10}}
            resizeMode="contain"
            source={ICONS.PROFILE_ICON}
          />
          <View style={{width: '80%'}}>
            <Text style={{...FONTS.body2, fontWeight: '500'}}>
              Joanne Weasley
            </Text>
            <View
              style={{flexDirection: 'row', width: '100%', overflow: 'hidden'}}>
              <Text style={{...FONTS.body5, fontWeight: '500'}}>
                Location:{' '}
              </Text>
              <Text style={{...FONTS.body5}}>London, United Kingdom</Text>
            </View>
          </View>
        </View>

        <FlatList
          contentContainerStyle={{padding: '5%'}}
          data={[1, 2, 3, 4]}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  marginBottom: '5%',
                  padding: '3%',
                  borderRadius: 10,
                  borderColor: COLORS.lightGray1,
                  shadowColor: '#3912741A',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 1.22,
                  elevation: 3,
                  backgroundColor: '#ffffff',
                  flexDirection: 'row',
                }}>
                <View style={{width: '65%'}}>
                  <Text style={{...FONTS.h3}}>Home Address</Text>
                  <Text style={{...FONTS.body5}}>
                    77 Botley Road, Middle Winterslow, SP5 3YN, United Kingdom
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: '5%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('EditAddress');
                    }}
                    style={{
                      marginHorizontal: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{height: 20, width: 20}}
                      source={ICONS.EDIT_ICON}
                    />
                    <Text
                      style={{
                        fontSize: 10,
                        marginTop: 2,

                        fontFamily: 'Montserrat-SemiBold',
                        color: COLORS.primary,
                      }}>
                      EDIT
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      height: '70%',
                      width: 1,
                      backgroundColor: COLORS.lightGray,
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      marginHorizontal: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{height: 20, width: 20}}
                      source={ICONS.DELETE_ICON}
                    />
                    <Text
                      style={{
                        fontSize: 10,
                        marginTop: 2,

                        fontFamily: 'Montserrat-SemiBold',
                        color: COLORS.mainBlack,
                      }}>
                      DELETE
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: '#FBFBFB',
  },
  headerText: {
    ...FONTS.body2,
    fontWeight: '500',
    marginVertical: '6%',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default ManageAddress;
