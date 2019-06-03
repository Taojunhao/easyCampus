import {proServer} from '../../tools/service'

/**
 * 推荐api
 */
export class recommend {

  //获取新闻列表
  static getNewList() {
    return proServer.connection('GET', 'recomend/getNewList');
  }
}
