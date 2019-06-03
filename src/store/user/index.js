/**
 * user
 */

import {Msg as Toasts, Msg} from '../../tools/message/Msg';
import {Auth} from './auth';
import crypto from 'crypto';
import {Login} from "../../view/login/api";

const defaultUser = {login: '', password: '', remember: false};

export default {
  state: {
    /** token */
    token: Auth.getToken() || null,
    /** 用户登陆角色信息 */
    userInfo: Auth.getUserInfo() || {},
    /** 用户登陆账户密码 */
    accountPwd: Auth.getAccountPwd() || defaultUser,
    /** 是否登陆 */
    isLogin: Auth.getLogin() || false,
    /** 角色权限点 */
    permission: Auth.getUserInfo().userPermissionsCode || {},
  },
  /** 计算属性 */
  getters: {},
  /** 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation */
  mutations: {
    ACCOUNT_AUTH_STATUS_CHANGED(state, data) {
      const d = data.data;
      if (data.params.remember) {
        state.accountPwd = data.params;
        Auth.setAccountPwd(data.params)
      }
      console.log('当前登录角色信息： %o', d);
      state.token = d.data.token;
      state.userInfo = d.data;
      state.isLogin = true;
      // state.permission = d.loginUser.userPermissionsCode;
      Auth.setUserInfo(JSON.stringify(d.data));
      Auth.setLogin();
      Auth.setToken(d.data.token)
    },
    ACCOUNT_LOGOUT_FAILURE(state) {
      state.token = null;
      state.userInfo = {};
      state.accountPwd = {};
      state.permission = [];
      state.isLogin = false;
      Auth.removeAccountPwd();
      Auth.removeUserInfo();
      Auth.removeLogin();
      Auth.removeToken();
    },
    ACCOUNT_LOGOUT_ROULES(state) {
      state.permission = Auth.getUserInfo().permissionKeys
    }
  },
  /** Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。 */
  actions: {
    /** 登录 */
    accountLoginSubmit({commit}, params) {
      return new Promise((resolve, reject) => {
        let param = JSON.parse(JSON.stringify(params));
        let md5 = crypto.createHash("md5");
        md5.update(param.password);
        let password = md5.digest('hex');
        param.password = password

        Login.loginSubmit(param).then((res) => {
          if (res.data.isLogin) {
            commit('ACCOUNT_AUTH_STATUS_CHANGED', {...res, params});
            Toasts.success('登陆成功');
            resolve()
          } else {
            Msg.warn('账号或密码错误,请重新输入');
            reject('账号或密码错误,请重新输入')
          }
        }).catch(err => {
          Msg.warn('登录失败');
          reject(err);
          commit('ACCOUNT_LOGOUT_FAILURE');
        })
      })
    },
    /** 登出 */
    accountLogoutSubmit({commit}, params) {
      return new Promise((resolve, reject) => {
        Login.logout(params).then((res) => {
          commit('ACCOUNT_LOGOUT_FAILURE');
          resolve()
        }).catch(err => {
          commit('ACCOUNT_LOGOUT_FAILURE');
          resolve()
        })
      })
    },
    /** 登出 */
    test({commit}) {
      return new Promise((resolve, reject) => {
        LoginService.test().then(res => {
          commit('ACCOUNT_LOGOUT_FAILURE');
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    /** 赋值角色权限 */
    accountSetRoules({commit}) {
      return new Promise(resolve => {
        commit('ACCOUNT_LOGOUT_ROULES');
        resolve()
      })
    }
  }
}
