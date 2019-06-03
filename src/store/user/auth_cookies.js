
import Cookies from 'js-cookie'

const sessionStorage = window.sessionStorage;
export class Auth {
  static setUserInfo(value = {}) {
    return Cookies.set('user.userInfo', JSON.stringify(value));
  }

  static getUserInfo() {
    const userInfo = Cookies.get('user.userInfo');
    return userInfo ? JSON.parse(JSON.parse(Cookies.get('user.userInfo'))) : null
  }

  static removeUserInfo() {
    return Cookies.remove('user.userInfo')
  }

  static setAccountPwd(value = {}) {
    return Cookies.set('user.accountPwd', JSON.stringify(value))
  }

  static getAccountPwd() {
    const accountPwd = Cookies.get('user.accountPwd');
    return accountPwd ? JSON.parse(sessionStorage.getItem('user.accountPwd')) : null
  }

  static removeAccountPwd() {
    return Cookies.remove('user.accountPwd')
  }

  static setLogin() {
    return Cookies.set('user.isLogin', true)
  }

  static getLogin() {
    return !!Cookies.get('user.isLogin')
  }

  static removeLogin() {
    return Cookies.remove('user.isLogin')
  }

  static setToken(value) {
    return Cookies.set('user.token', value)
  }

  static getToken() {
    return Cookies.get('user.token')
  }

  static removeToken() {
    return Cookies.remove('user.token')
  }
}
