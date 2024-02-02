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
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, ICONS, SIZES} from '../../resources';
import {FONTS} from '../../resources';
import Button from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';
import CustomHeader from '../../components/CustomHeader';
import {useAppDispatch, useAppSelector} from '../../stateManagemer/Store';
import {getUserData} from '../../stateManagemer/slice/LoginSlice';
import Loader from '../../components/Loader';

const EditProfile = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [country, setCountry] = useState('');
  const userData = useAppSelector(state => state.loginReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserData(userData.id + ''));
  }, []);
  useEffect(() => {
    setName(userData.first_name + ' ' + userData.last_name);
    setEmail(userData?.email ?? '');
    setCountry(userData?.country ?? '');
    setMobile(userData?.phone ?? '');
    console.log(userData.country);
    // setPostalCode(userData.);
  }, [userData]);
  return (
    <View style={styles.container}>
      <CustomHeader />
      <ScrollView>
        <View style={{flex: 1, marginHorizontal: 22}}>
          <View style={{marginTop: '5%', marginBottom: '5%'}}>
            <Text style={styles.signInText}>Edit Profile</Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              marginBottom: '5%',
              overflow: 'hidden',
            }}>
            <Image
              style={{height: 180, width: 180, borderRadius: 180}}
              resizeMode="contain"
              source={ICONS.PROFILE_ICON}
            />
            <View
              style={{
                backgroundColor: COLORS.black,
                height: 180,
                width: 180,
                position: 'absolute',
                opacity: 0.2,
                borderRadius: 180,
              }}></View>
            <TouchableOpacity
              style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                height: 180,
                width: 180,
              }}>
              <Image
                resizeMode="contain"
                source={ICONS.EDIT_ICON}
                style={{
                  height: 40,
                  alignSelf: 'center',

                  width: 40,
                  tintColor: COLORS.white,
                }}
              />
            </TouchableOpacity>
          </View>

          <CustomTextInput
            placeholder={'Full Name'}
            value={name}
            onChangeText={(text: string) => {
              setName(text);
            }}
            style={{backgroundColor: COLORS.white}} // You can pass additional styles
            keyboardType="default" // You can pass any TextInput props
          />
          <CustomTextInput
            placeholder={'Date of Birth*'}
            value={dob}
            onChangeText={(text: string) => {
              setDob(text);
            }}
            style={{backgroundColor: COLORS.white}} // You can pass additional styles
            keyboardType="default" // You can pass any TextInput props
          />
          <CustomTextInput
            placeholder={'Email'}
            value={email}
            onChangeText={(text: string) => {
              setEmail(text);
            }}
            style={{backgroundColor: COLORS.white}} // You can pass additional styles
            keyboardType="default" // You can pass any TextInput props
          />
          <CustomTextInput
            placeholder={'Mobile*'}
            value={mobile}
            onChangeText={(text: string) => {
              setMobile(text);
            }}
            style={{backgroundColor: COLORS.white}} // You can pass additional styles
            keyboardType="default" // You can pass any TextInput props
          />
          <CustomTextInput
            placeholder={'Country*'}
            value={country}
            onChangeText={(text: string) => {
              setCountry(text);
            }}
            style={{backgroundColor: COLORS.white}} // You can pass additional styles
            keyboardType="default" // You can pass any TextInput props
          />

          <Button
            onPress={() => Alert.alert('Save  Pressed')}
            title="Save"
            borderColor={COLORS.primary}
            filled
            color={COLORS.primary}
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
          />
          <Button
            onPress={() => Alert.alert('Cancel Pressed')}
            title="Cancel"
            borderColor={COLORS.mainBlack}
            filled
            color={COLORS.mainBlack}
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
          />
          <View style={{height: SIZES.height * 0.1}}></View>
        </View>
      </ScrollView>
      {userData.isLoading && <Loader />}
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
    backgroundColor: '#FBFBFB',
  },
  signInText: {
    ...FONTS.h2,
    marginTop: 12,
    color: COLORS.black,
    textAlign: 'center',
  },
  desText: {
    ...FONTS.body4,
    marginTop: 12,
    color: COLORS.black,
  },
});

export default EditProfile;
