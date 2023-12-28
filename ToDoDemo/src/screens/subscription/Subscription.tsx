import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Switch,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, ICONS, SIZES} from '../../resources';
import {FONTS} from '../../resources';
import Button from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';
import CustomHeader from '../../components/CustomHeader';

const Subscription = ({navigation}: any) => {
  const [country, setCountry] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const FreeSubsCard = () => {
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: COLORS.white,
          //   justifyContent: 'center',
          padding: '2%',
          borderRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <Image
            style={{height: 80, width: 80}}
            source={ICONS.SUBS_ALERT_ICON}
          />
          <View style={{marginTop: 15, width: '65%'}}>
            <Text style={{...FONTS.body4, lineHeight: 20}}>Subscription:</Text>
            <Text style={{...FONTS.h3, color: COLORS.primary}}>Free</Text>
          </View>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={{height: 25, marginTop: 25, width: 25}}
              source={ICONS.MENU_ICON}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: -10,
            backgroundColor: COLORS.primaryLight,
            padding: '5%',
            marginBottom: 10,
            marginHorizontal: '3%',
            borderRadius: 10,
          }}>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              ...FONTS.body5,
              fontWeight: '500',
              color: COLORS.primary,
            }}>
            <Image
              resizeMode="contain"
              style={{height: 13, width: 13, marginRight: '2%'}}
              source={ICONS.CHECKICON}
            />
            You receive 10 Doorbells per month
          </Text>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              ...FONTS.body5,
              fontWeight: '500',
              color: COLORS.primary,
            }}>
            <Image
              resizeMode="contain"
              style={{height: 13, width: 13, marginRight: '2%'}}
              source={ICONS.CHECKICON}
            />
            Only 01 Address
          </Text>
        </View>
      </View>
    );
  };
  const SubsCard1 = () => {
    return (
      <View
        style={{
          marginTop: 10,
          width: '100%',
          backgroundColor: COLORS.white,
          //   justifyContent: 'center',
          padding: '2%',
          borderRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              //   marginTop: 15,
              marginVertical: 10,
              marginLeft: 10,
              padding: 10,
              borderRadius: 10,
              marginRight: '52%',
              backgroundColor: COLORS.primary,
            }}>
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
        <View
          style={{
            backgroundColor: COLORS.primaryLight,
            padding: '5%',
            marginBottom: 10,
            marginHorizontal: '3%',
            borderRadius: 10,
          }}>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              ...FONTS.body5,
              fontWeight: '500',
              color: COLORS.primary,
            }}>
            <Image
              resizeMode="contain"
              style={{height: 13, width: 13, marginRight: '2%'}}
              source={ICONS.CHECKICON}
            />
            No Ads
          </Text>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              ...FONTS.body5,
              fontWeight: '500',
              color: COLORS.primary,
            }}>
            <Image
              resizeMode="contain"
              style={{height: 13, width: 13, marginRight: '2%'}}
              source={ICONS.CHECKICON}
            />
            You receive 10 Doorbells per month
          </Text>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              ...FONTS.body5,
              fontWeight: '500',
              color: COLORS.primary,
            }}>
            <Image
              resizeMode="contain"
              style={{height: 13, width: 13, marginRight: '2%'}}
              source={ICONS.CHECKICON}
            />
            Only 02 Address
          </Text>
        </View>
      </View>
    );
  };
  const SubsCard2 = () => {
    return (
      <View
        style={{
          marginTop: 10,
          width: '100%',
          backgroundColor: COLORS.white,
          //   justifyContent: 'center',
          padding: '2%',
          borderRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            // marginRight: '100%',
          }}>
          <View
            style={{
              //   marginTop: 15,
              marginVertical: 10,
              marginLeft: 10,
              padding: 10,
              borderRadius: 10,
              marginRight: '52%',
              backgroundColor: COLORS.primary,
            }}>
            <Text
              style={{
                ...FONTS.body5,
                // marginRight: '100%',
                lineHeight: 20,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Subscription:
            </Text>
            <Text style={{...FONTS.h3, color: COLORS.white}}>Premium</Text>
          </View>
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
        <View
          style={{
            backgroundColor: COLORS.primaryLight,
            padding: '5%',
            marginBottom: 10,
            marginHorizontal: '3%',
            borderRadius: 10,
          }}>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              ...FONTS.body5,
              fontWeight: '500',
              color: COLORS.primary,
            }}>
            <Image
              resizeMode="contain"
              style={{height: 13, width: 13, marginRight: '2%'}}
              source={ICONS.CHECKICON}
            />
            No Ads
          </Text>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              ...FONTS.body5,
              fontWeight: '500',
              color: COLORS.primary,
            }}>
            <Image
              resizeMode="contain"
              style={{height: 13, width: 13, marginRight: '2%'}}
              source={ICONS.CHECKICON}
            />
            You receive 10 Doorbells per month
          </Text>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              ...FONTS.body5,
              fontWeight: '500',
              color: COLORS.primary,
            }}>
            <Image
              resizeMode="contain"
              style={{height: 13, width: 13, marginRight: '2%'}}
              source={ICONS.CHECKICON}
            />
            Unlimited Address
          </Text>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              ...FONTS.body5,
              fontWeight: '500',
              color: COLORS.primary,
            }}>
            <Image
              resizeMode="contain"
              style={{height: 13, width: 13, marginRight: '2%'}}
              source={ICONS.CHECKICON}
            />
            15 Days Cloud recording
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <CustomHeader /> */}
      <ScrollView style={styles.container}>
        <View style={{flex: 1, marginHorizontal: 22}}>
          <View style={{marginBottom: '5%'}}>
            <Text style={styles.signInText}>Subscription</Text>
          </View>
          <FreeSubsCard />
          <SubsCard1 />
          <SubsCard2 />
          <Button
            onPress={() => Alert.alert('Save Address Pressed')}
            title="Cancel Subscription"
            borderColor={COLORS.primary}
            filled
            color={COLORS.black}
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
          />
        </View>
        <View style={{height: SIZES.height * 0.2}}></View>
      </ScrollView>
    </View>
  );
};

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
  },
  container: {
    flex: 1,
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: '#161616',
  },
  signInText: {
    ...FONTS.h2,
    marginTop: 12,
    color: COLORS.white,
  },
  desText: {
    ...FONTS.body4,
    marginTop: 12,
    color: COLORS.black,
  },
});

export default Subscription;
