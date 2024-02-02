import URLService from './URLServices';
import { EndPoints, baseUrl } from '../resources/Constants';
import { loginRequestType, signUpRequestType } from './Modals';

export default class URLManager {

  login(data: loginRequestType) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.LOGIN_END_POINT;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, 'POST')
      .then((res: any) => res);
  }
  signUp(data: signUpRequestType) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.SIGN_UP_END_POINT;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, 'POST')
      .then((res: any) => res);
  }
  forgetPassword(data: { email: string }) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.FORGET_PASSWORD_END_POINT;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, 'POST')
      .then((res: any) => res);
  }
  getUserData(data: string) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.GET_USER_INFO_END_POINT + data;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, {}, 'GET')
      .then((res: any) => res);
  }
}
