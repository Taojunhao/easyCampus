import {authServer} from '../../tools/service'

/**
 * 登陆api
 */
export class Test {

  // 登录
  static test(data) {
    return authServer.connection('GET', '/test/testApi',data);
  }
}
