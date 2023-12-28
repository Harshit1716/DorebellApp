import URLService from './URLServices';
import { EndPoints, baseUrl } from '../resources/Constants';
import { loginRequestType, signUpRequestType } from './Modals';

export default class URLManager {
  getData(data: number) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.GETDATAENDPOINT + `${data}.json`;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, 'GET')
      .then((res: any) => res);
  }
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
}
