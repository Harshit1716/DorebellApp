import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS, ICONS, SIZES} from '../../resources';
import CustomCard from '../../components/CustomCard';
import {useAppSelector} from '../../stateManagemer/Store';

const Profile = ({navigation}: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const profileData = useAppSelector(state => state.loginReducer);
  const profileCard = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: '5%',
          marginTop: '5%',
          paddingBottom: '3%',
          backgroundColor: COLORS.primaryLight,
          padding: '5%',
          overflow: 'hidden',
          borderRadius: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 70, width: 70, borderRadius: 70}}
            resizeMode="contain"
            source={ICONS.PROFILE_ICON}
          />
          <View style={{marginLeft: 15, width: '75%'}}>
            <Text
              style={{
                ...FONTS.body2,
                fontWeight: '700',
                color: COLORS.black,
              }}>
              {profileData?.first_name + ' ' + profileData?.last_name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                overflow: 'hidden',
              }}>
              <Text
                style={{
                  ...FONTS.body4,
                  fontWeight: '600',
                  color: COLORS.black,
                }}>
                Location:
              </Text>
              <Text style={{...FONTS.body5, color: COLORS.black}}>
                London, United Kingdom
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginHorizontal: '5%',
            marginTop: '5%',
            paddingBottom: '3%',
            backgroundColor: COLORS.primary,
            padding: '5%',
            overflow: 'hidden',
            width: '105%',
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  ...FONTS.body5,
                  lineHeight: 20,
                  fontWeight: 'bold',
                  color: COLORS.white,
                }}>
                Subscription:
              </Text>
              <Text style={{...FONTS.h3, color: COLORS.white}}>Basic</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log(profileData);
                //   navigation.navigate('EditAddress');
              }}
              style={{
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 20, width: 20, tintColor: COLORS.white}}
                source={ICONS.EDIT_ICON}
              />
              <Text
                style={{
                  fontSize: 10,
                  marginTop: 2,

                  fontFamily: 'Montserrat-SemiBold',
                  color: COLORS.white,
                }}>
                EDIT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const AccountSection = () => {
    return (
      <View style={{padding: '2%'}}>
        <Text
          style={{
            ...FONTS.body3,
            fontWeight: '700',
            color: COLORS.black,
            paddingHorizontal: '3%',
            marginTop: '5%',
          }}>
          Account
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            paddingBottom: '3%',
            marginVertical: '4%',
            borderBottomWidth: 1,
            borderBlockColor: COLORS.lightGray,
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONTS.body4,
              flex: 1,
              color: COLORS.black,
              color: COLORS.black,
            }}>
            Edit Profile
          </Text>
          <Image
            resizeMode="contain"
            style={{height: 12, width: 12}}
            source={ICONS.FORWARD_ICON}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            paddingBottom: '3%',
            borderBottomWidth: 1,
            borderBlockColor: COLORS.lightGray,
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONTS.body4,
              flex: 1,
              color: COLORS.black,
              color: COLORS.black,
            }}>
            Manage Addresses
          </Text>
          <Image
            resizeMode="contain"
            style={{height: 12, width: 12}}
            source={ICONS.FORWARD_ICON}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            marginTop: '4%',
            // borderBottomWidth: 1,
            // paddingBottom: '3%',
            borderBlockColor: COLORS.lightGray,
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONTS.body4,
              flex: 1,
              color: COLORS.black,
              color: COLORS.black,
            }}>
            Title
          </Text>
          <Image
            resizeMode="contain"
            style={{height: 12, width: 12}}
            source={ICONS.FORWARD_ICON}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const NotificaitonSection = () => {
    return (
      <View style={{padding: '2%'}}>
        <Text
          style={{
            ...FONTS.body3,
            fontWeight: '700',
            color: COLORS.black,
            paddingHorizontal: '3%',
            marginTop: '3%',
          }}>
          Notifications
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            marginVertical: '4%',
            paddingBottom: '3%',
            borderBottomWidth: 1,
            borderBlockColor: COLORS.lightGray,
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.body4, flex: 1, color: COLORS.black}}>
            Ring History
          </Text>
          <Image
            resizeMode="contain"
            style={{height: 12, width: 12}}
            source={ICONS.FORWARD_ICON}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            paddingBottom: '3%',
            borderBottomWidth: 1,
            borderBlockColor: COLORS.lightGray,
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.body4, flex: 1, color: COLORS.black}}>
            Notification Alert
          </Text>
          <Switch
            trackColor={{false: COLORS.gray, true: COLORS.primary}}
            thumbColor={isEnabled ? COLORS.white : COLORS.white}
            ios_backgroundColor="#3e3e3e"
            style={{
              transform: [
                {scaleX: Platform.OS == 'ios' ? 0.7 : 1},
                {scaleY: Platform.OS == 'ios' ? 0.7 : 1},
              ],
            }}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    );
  };
  const MoreSection = () => {
    return (
      <View style={{padding: '2%'}}>
        <Text
          style={{
            ...FONTS.body3,
            fontWeight: '700',
            color: COLORS.black,
            paddingHorizontal: '3%',
          }}>
          More
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            marginVertical: '4%',
            paddingBottom: '3%',
            borderBottomWidth: 1,
            borderBlockColor: COLORS.lightGray,
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.body4, flex: 1, color: COLORS.black}}>
            Language
          </Text>
          <Image
            resizeMode="contain"
            style={{height: 12, width: 12}}
            source={ICONS.FORWARD_ICON}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            // marginTop: '2%',
            paddingBottom: '3%',
            borderBottomWidth: 1,
            borderBlockColor: COLORS.lightGray,
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.body4, flex: 1, color: COLORS.black}}>
            Support
          </Text>
          <Image
            resizeMode="contain"
            style={{height: 12, width: 12}}
            source={ICONS.FORWARD_ICON}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Settings');
          }}
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            marginTop: '4%',
            paddingBottom: '3%',
            borderBottomWidth: 1,
            borderBlockColor: COLORS.lightGray,
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.body4, flex: 1, color: COLORS.black}}>
            Settings
          </Text>
          <Image
            resizeMode="contain"
            style={{height: 12, width: 12}}
            source={ICONS.FORWARD_ICON}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{...styles.container}}>
      {/* Profile View */}
      {profileCard()}

      <ScrollView style={{...styles.container}}>
        {AccountSection()}
        {NotificaitonSection()}
        {MoreSection()}
        <View style={{height: SIZES.height * 0.2}}></View>
      </ScrollView>
    </View>
  );
};

export default Profile;

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
