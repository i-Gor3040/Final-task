import { Key } from "webdriverio";

export class LoginPage {
  async open() {
    await browser.url("/");
  }

  usernameInput() {
    return $('[data-test="username"]');
  }

  passwordInput() {
    return $('[data-test="password"]');
  }

  loginBtn() {
    return $('[data-test="login-button"]');
  }

  errorMsg() {
    return $('[data-test="error"]');
  }

  errorMsgText() {
    return this.errorMsg().getText();
  }

  selectInput() {
    return browser.keys([Key.Ctrl, "a"]);
  }

  clearInput() {
    return browser.keys(["Backspace"]);
  }
}
