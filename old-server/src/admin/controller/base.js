module.exports = class extends think.Controller {
  async __before() {
    // 根据token值获取用户id
    console.log(this.ctx.header);
    think.token = this.ctx.header["x-xzzshop-token"] || "";
    console.log(think.token);
    const tokenSerivce = think.service("token", "admin");
    think.userId = await tokenSerivce.getUserId();

    // 只允许登录操作
    if (this.ctx.controller !== "auth") {
      if (think.userId <= 0) {
        return this.fail(401, "请先登录");
      }
    }
  }
};
