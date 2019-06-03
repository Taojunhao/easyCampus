import { Notify } from 'vant';

/**
 * 全局提示
 * @param 'success' | 'error' | 'warn' | 'info'
 * @param msg
 * @parm type toast or Notify
 */

export class  Msg {
  /**
   * 成功提示
   * @param title
   */
  static success(title) {
    Notify.clear();
    Notify({
      message: title || '成功',
      duration: 1000,
      background: '#67c23a'
    });
  }
  /**
   * 失败提示
   * @param title
   */
  static error(title,time) {
    Notify.clear();
    Notify({
      message: title || '错误',
      duration: time || 1000,
      background: '#F56c6c'
    });
  }
  /**
   * 警告提示
   * @param title
   */
  static warn(title) {
    Notify.clear();
    Notify({
      message: title || '警告',
      duration: 1000,
      background: '#E6A23C'
    });
  }
  /**
   * 消息提示
   * @param title
   */
  static info(title) {
    Notify.clear();
    Notify({
      message: title || '消息',
      duration: 1000,
      background: '#909399'
    });
  }
  static loading() {

  }
}