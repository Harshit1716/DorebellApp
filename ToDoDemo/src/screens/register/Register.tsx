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
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, ICONS, SIZES} from '../../resources';
import {FONTS} from '../../resources';
import Button from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';
import {useAppDispatch, useAppSelector} from '../../stateManagemer/Store';
import {doSignUp} from '../../stateManagemer/slice/LoginSlice';
import {SignUpResponse, signUpRequestType} from '../../networkLayer/Modals';
import URLManager from '../../networkLayer/URLManager';

const Register = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.loginReducer.isLoading);
  const userEmail = useAppSelector(state => state.loginReducer.email);

  const validate = () => {
    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    // if (!email || email == '') {
    //   Alert.alert('Error', 'Enter a valid email');
    //   return false;
    // }
    // if (reg.test(email) === false) {
    //   Alert.alert('Error', 'Enter a valid email');
    //   return false;
    // }
    // if (!password || password == '') {
    //   Alert.alert('Error', 'Enter a valid password');
    //   return false;
    // }
    return true;
  };
  const navigateToLogin = () => {
    setName('');
    setPhone('');
    setPassword('');
    setEmail('');
    navigation.navigate('Login');
  };
  const handleSignUpPressed = async () => {
    const res = await validate();
    if (res) {
      const body: signUpRequestType = {
        first_name: name,
        last_name: phone,
        email,
        password,
      };
      let urlManager = new URLManager();
      return urlManager
        .signUp(body)
        .then(res => {
          return res.json() as Promise<SignUpResponse>;
        })
        .then(res => {
          if (!res.hasError) {
            console.log(res);

            Alert.alert(
              'Succes',
              res.message,
              [{text: 'OK', onPress: navigateToLogin}],
              {
                cancelable: true,
              },
            );
          } else {
            console.log(res);
            Alert.alert('Error', res?.error + '');
          }
        })
        .catch(e => {
          Alert.alert(e.name, e.message);
          return e.response;
        })
        .finally(() => {});
    }
  };
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
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, marginHorizontal: 22}}>
          <View style={{marginTop: '10%', marginBottom: '5%'}}>
            <Text style={styles.signInText}>Lets Register Your Account</Text>
            <Text style={styles.desText}>
              Hello user, you have a greatful journey
            </Text>
          </View>

          <CustomTextInput
            placeholder={'First Name'}
            value={name}
            onChangeText={(text: string) => {
              setName(text);
            }}
            style={{backgroundColor: COLORS.white}} // You can pass additional styles
            keyboardType="default" // You can pass any TextInput props
          />
          <CustomTextInput
            placeholder={'Last Name'}
            value={phone}
            onChangeText={(text: string) => {
              setPhone(text);
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
            placeholder={'Password'}
            value={password}
            onChangeText={(text: string) => {
              setPassword(text);
            }}
            style={{backgroundColor: COLORS.white}} // You can pass additional styles
            keyboardType="default" // You can pass any TextInput props
          />

          <Button
            onPress={handleSignUpPressed}
            title="Sign Up"
            borderColor={COLORS.mainBlack}
            filled
            color={COLORS.mainBlack}
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.gray,
                marginHorizontal: 10,
              }}
            />
            <Text style={{...FONTS.bodySemi4}}>Or sign up with</Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.gray,
                marginHorizontal: 10,
              }}
            />
          </View>
          {socialLogin()}
          <View style={styles.noAccContainer}>
            <Text style={{...FONTS.body4, color: COLORS.black}}>
              Already have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.registerNowText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
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
    backgroundColor: COLORS.white,
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

export default Register;
