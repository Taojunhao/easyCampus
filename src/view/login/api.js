import {authServer} from '../../tools/service'

/**
 * 登陆api
 */
export class Login {

  // 登录
  static loginSubmit(data) {
    return authServer.connection('POST', 'auth/login', data);
  }
  //退出登录
  static logout(data) {
    return authServer.connection('GET', 'LoginUser/logout',data);
  }
  // 注册
  static register(data) {
    return authServer.connection('POST', 'auth/regist', data);
  }
}
