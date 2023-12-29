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
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, ICONS, SIZES} from '../../resources';
import {FONTS} from '../../resources';
import Button from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';
import {useAppDispatch, useAppSelector} from '../../stateManagemer/Store';
import {doLogin} from '../../stateManagemer/slice/LoginSlice';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.loginReducer.isLoading);

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
  const handleLoginPressed = async () => {
    const res = await validate();
    if (res) {
      dispatch(doLogin({email, password}));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, marginHorizontal: 22}}>
          <View style={{marginTop: '20%', marginBottom: '5%'}}>
            <Text style={styles.signInText}>Lets Sign You in</Text>
            <Text style={styles.desText}>
              Welcome Back, you have been missed.
            </Text>
          </View>

          <CustomTextInput
            placeholder={'Email, Phone & Username'}
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
          <TouchableOpacity
            style={{
              marginTop: 10,
              borderBottomWidth: 1,
              //   width: '40%',
              alignSelf: 'flex-end',
              borderBottomColor: COLORS.mainBlack,
            }}>
            <Text
              style={{...FONTS.body5, fontWeight: '500', color: COLORS.black}}>
              Forgot Passowrd ?
            </Text>
          </TouchableOpacity>
          <Button
            onPress={handleLoginPressed}
            title="Login"
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
            <Text style={{...FONTS.bodySemi4}}>Or sign in with</Text>
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
              Don't have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerNowText}>Register Now</Text>
            </Pressable>
          </View>
        </View>
        {isLoading && (
          <View
            style={{
              position: 'absolute',
              flex: 1,
              height: SIZES.height,
              width: SIZES.width,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: SIZES.height * 0.15,
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                borderRadius: 20,
                borderColor: '#3912741A',
                margin: 20,
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 2},
                shadowOpacity: 0.4,
                shadowRadius: 3,
              }}>
              <ActivityIndicator size="large" color={COLORS.white} />
              <Text style={{color: COLORS.white, marginTop: 10, ...FONTS.h3m}}>
                Loading....
              </Text>
            </View>
          </View>
        )}
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
    marginTop: 12,
    color: COLORS.black,
  },
  desText: {
    ...FONTS.body4,
    marginTop: 12,
    color: COLORS.black,
  },
});

export default Login;
