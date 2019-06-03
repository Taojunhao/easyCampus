/**
 *  http请求工具类
 *  基于axios封装
 */
import axios from 'axios'
import qs from 'qs'
import {version} from '../../package'
/**
 * 请求类
 */
export class BaseApi {
  servers;

  /**
   * 初始化servers
   * @param hot
   */
  constructor(hot) {
    const headers = new Headers();
    headers.set('App-Version', '0.1.0');
    this.servers = axios.create({
      baseURL: `${hot}/`,
      headers,
      timeout: 1,
    });
    this.servers.defaults.timeout = 5000;
    this.servers.interceptors.request.use(function (config) {
      return config
    }, function (error) {
      return Promise.reject(error || '网络繁忙，请稍候再试！');
    });
    this.servers.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      return Promise.reject(error.response || '网络繁忙，请稍候再试！');
    })
  }

  /**
   * fetch
   * @param method
   * @param url
   * @param body
   * @param fileList
   * @returns {Promise<any>}
   */
  connection(method = 'GET', url, body, fileList) {
    // this.getStatusToken();
    if (typeof body !== 'object') body = {};
    method = method.toLocaleLowerCase();
    if (fileList && (fileList instanceof Array)) {
      let headers = {'Content-Type': 'multipart/form-data'};
      const param = new window.FormData();
      for (const key in body) {
        if (Object.prototype.hasOwnProperty.call(body, key)) param.append(key, body[key]);
      }
      fileList.forEach(file => param.append('files', file));
      return Promise.resolve(this.servers[method](url, param, {headers}))
    }
    if (method === 'get') {
      url = `${url}?${qs.stringify(body)}`;
      body = {}
    }
    return Promise.resolve(this.servers[method](url, body))
  }

  /**
   * 设置token
   * @param isLogin
   * @param token
   */
  setToken({isLogin, token}) {
    if (isLogin) {
      this.servers.defaults.headers.common['Authorization'] = token;
    }
  }

  /**
   * 获取登录状态，token值
   * @returns {{isLogin: string, token: string}}
   */
  getStatusToken() {
    const {isLogin, token} = store.getters;
    this.setToken({isLogin, token})
  }
}


/**
 * 业务服务接口
 * @type {BaseApi}
 */
export const authServer = new BaseApi(process.env.BASE_APP_AUTH_SERVER);
/**
 * 权限服务接口
 * @type {BaseApi}
 */
export const proServer = new BaseApi(process.env.BASE_APP_PRO_SERVER);
