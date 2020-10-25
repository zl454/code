class Login {
  // 构造器
  constructor() {
    this.init()
  }
  // 初始化方法
  init() {
    // 新建 div
    let loginWrapper = document.createElement("div")
    // 添加样式
    loginWrapper.classList.add("mask-layer")
    // 添加模版字符串
    loginWrapper.innerHTML =
      `
      <div class="login-wrapper">
        <div class="login-title">
          <div class="title-text">登录框</div>
          <div class="close-btn">X</div>
        </div>
        <div class="username-input">
          <span class="login-text">用户名:</span>
          <input type="text">
        </div>
        <div class="pwd-input">
          <span class="login-text">密 码：</span>
          <input type="password">
        </div>
        <div class="btn-wrapper">
          <button class="confirm-btn">确定</button>
          <button class="clear-btn">清空</button>
        </div>
      </div>
      `;
    // 插入元素
    document.body.insertBefore(loginWrapper, document.body.childNodes[0])
    // 注册关闭登录框事件
    Login.addCloseLoginEvent()
  }
  // 静态方法：获取元素
  static getLoginDom(cls) {
    return document.querySelector(cls)
  }
  // 静态方法：注册关闭登录框事件
  static addCloseLoginEvent() {
    this.getLoginDom(".close-btn").addEventListener("click", () => {
      // 给遮罩层添加 style ,隐藏遮罩层
      this.getLoginDom(".mask-layer").style = "display:none"
    })
  }
  // 静态方法：获取实例（单例）
  static getInstance() {
    if (!this.instance) {
      this.instance = new Login()
    } else {
      // 移除遮罩层style,显示遮罩层
      this.getLoginDom(".mask-layer").removeAttribute("style")
    }
    return this.instance
  }
}
