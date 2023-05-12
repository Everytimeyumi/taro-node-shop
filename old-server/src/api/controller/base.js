module.exports = class extends think.Controller {
  async __before() {
    // 根据token值获取用户id
    const token = this.ctx.header["x-xzzshop-token"] || "";
    const tokenSerivce = think.service("token", "api");
    think.userId = tokenSerivce.getUserId(token);
  }
  /**
   * 获取时间戳
   * @returns {Number}
   */
  getTime() {
    return parseInt(Date.now() / 1000);
  }
  /**
   * 获取当前登录用户的id
   * @returns {*}
   */
  getLoginUserId() {
    // 开始修复userId的问题
    const token = this.ctx.header["x-xzzshop-token"] || "";
    const tokenSerivce = think.service("token", "api");
    return tokenSerivce.getUserId(token);
  }
};
