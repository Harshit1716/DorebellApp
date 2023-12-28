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
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, ICONS, SIZES} from '../../resources';
import {FONTS} from '../../resources';
import Button from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';
import CustomHeader from '../../components/CustomHeader';

const EditAddress = ({navigation}: any) => {
  const [title, setTitle] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const socialLogin = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: '50%',
        }}>
        <TouchableOpacity
          onPress={() => console.log('Pressed')}
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            height: 52,
          }}>
          <Image
            source={ICONS.GOOGLE_LOGO_ICON}
            style={{
              height: 25,
              width: 25,
              marginRight: 8,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Pressed')}
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            height: 52,
          }}>
          <Image
            source={ICONS.FB_LOGO_ICON}
            style={{
              height: 25,
              width: 25,
              marginRight: 8,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Pressed')}
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            height: 52,
          }}>
          <Image
            source={ICONS.APPLE_LOGO_ICON}
            style={{
              height: 25,
              width: 25,
              marginRight: 8,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <CustomHeader />
      <View style={{flex: 1, marginHorizontal: 22}}>
        <View style={{marginTop: '5%', marginBottom: '5%'}}>
          <Text style={styles.signInText}>Edit Address</Text>
        </View>

        <CustomTextInput
          placeholder={'Title'}
          value={title}
          onChangeText={(text: string) => {
            setTitle(text);
          }}
          style={{backgroundColor: COLORS.white}} // You can pass additional styles
          keyboardType="default" // You can pass any TextInput props
        />
        <CustomTextInput
          placeholder={'Address Line 1*'}
          value={address1}
          onChangeText={(text: string) => {
            setAddress1(text);
          }}
          style={{backgroundColor: COLORS.white}} // You can pass additional styles
          keyboardType="default" // You can pass any TextInput props
        />
        <CustomTextInput
          placeholder={'Address Line 2'}
          value={address2}
          onChangeText={(text: string) => {
            setAddress2(text);
          }}
          style={{backgroundColor: COLORS.white}} // You can pass additional styles
          keyboardType="default" // You can pass any TextInput props
        />
        <CustomTextInput
          placeholder={'PostalCode*'}
          value={postalCode}
          onChangeText={(text: string) => {
            setPostalCode(text);
          }}
          style={{backgroundColor: COLORS.white}} // You can pass additional styles
          keyboardType="default" // You can pass any TextInput props
        />
        <CustomTextInput
          placeholder={'City*'}
          value={city}
          onChangeText={(text: string) => {
            setCity(text);
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
        <Text style={{marginTop: 20, ...FONTS.body4, color: COLORS.darkGray}}>
          Make this as a default address
        </Text>
        <Button
          onPress={() => Alert.alert('Save Address Pressed')}
          title="Save Address"
          borderColor={COLORS.primary}
          filled
          color={COLORS.primary}
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />
        <Button
          onPress={() => Alert.alert('Delete Pressed')}
          title="Delete Address"
          borderColor={COLORS.mainBlack}
          filled
          color={COLORS.mainBlack}
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />
      </View>
    </ScrollView>
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
  },
  desText: {
    ...FONTS.body4,
    marginTop: 12,
    color: COLORS.black,
  },
});

export default EditAddress;
