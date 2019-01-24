'use strict';
/**
 * ユーザログインリクエストボディ
 * とりあえずmail addressで
 */
class LoginRequestBody {
  constructor(mailAddress) {
    this.mailAddress = mailAddress;
  }
  get getMailAddress() {
    return this.mailAddress;
  }
  set setMailAddress(mailAddress) {
    this.mailAddress = mailAddress;
  }
}

module.exports = LoginRequestBody;
