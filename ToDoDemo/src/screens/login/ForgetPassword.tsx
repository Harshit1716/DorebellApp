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
import Loader from '../../components/Loader';
import {
  ForgetPasswordResponse,
  signUpRequestType,
} from '../../networkLayer/Modals';
import URLManager from '../../networkLayer/URLManager';

const ForgetPassword = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  //   const isLoading = useAppSelector(state => state.loginReducer.isLoading);

  const validate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (!email || email == '') {
      Alert.alert('Error', 'Enter a valid email');
      return false;
    }
    if (reg.test(email) === false) {
      Alert.alert('Error', 'Enter a valid email');
      return false;
    }

    return true;
  };
  const handleForgetPassword = async () => {
    const res = await validate();
    if (res) {
      setIsLoading(true);

      let urlManager = new URLManager();
      return urlManager
        .forgetPassword({email})
        .then(res => {
          return res.json() as Promise<ForgetPasswordResponse>;
        })
        .then(res => {
          if (!res.hasError) {
            console.log(res);

            Alert.alert(
              'Succes',
              res.message + ' ' + email,
              [
                {
                  text: 'OK',
                  onPress: () => {
                    navigation.goBack();
                  },
                },
              ],
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
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, marginHorizontal: 22}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{width: '20%'}}>
            <Image
              source={ICONS.BACK_ICON}
              style={{height: 20, width: 20}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={{marginTop: '15%', marginBottom: '0%'}}>
            <Text style={styles.signInText}>Forget Password</Text>
            <Text style={styles.desText}>
              Enter you email to get the reset password link
            </Text>
          </View>

          <CustomTextInput
            placeholder={'Email, Phone & Username'}
            value={email}
            onChangeText={(text: string) => {
              setEmail(text);
            }}
            style={{backgroundColor: COLORS.white, marginTop: '5%'}} // You can pass additional styles
            keyboardType="default" // You can pass any TextInput props
          />

          <Button
            onPress={handleForgetPassword}
            title="Forgot Password?"
            borderColor={COLORS.mainBlack}
            filled
            color={COLORS.mainBlack}
            style={{
              marginTop: '10%',
              marginBottom: 4,
            }}
          />
        </View>
        {isLoading && <Loader />}
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

export default ForgetPassword;
