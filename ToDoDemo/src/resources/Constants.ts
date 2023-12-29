// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

export const platform = Platform.OS;
//
export const kHEADERLANGUAGE = 'en_US';
export const kCLIENTVERSION = '1.2.1:' + platform;

export const baseUrl =
  'https://referandearn.eaccords.com/doorbelApi/';
// Used for async storage
export const storageKeys = {
  kTOKEN: 'token',
  kEMAIL: 'email',
  kPASSWORD: 'password',
  kPROFILE_IMAGE: 'profileImage',
  kDEVICETOKEN: 'deviceToken',
};

export const EndPoints = {
  GETDATAENDPOINT: '/id/',
  LOGIN_END_POINT: 'auth/signin',
  SIGN_UP_END_POINT: 'auth/signup',
};

export default {
  platform,
  kHEADERLANGUAGE,
  kCLIENTVERSION,
  baseUrl,
  EndPoints,
};
