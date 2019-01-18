'use strict';
/**
 * ユーザ登録リクエストボディ
 */
class RegisterRequestBody {
  constructor(name, homeAddress, mailAddress) {
    this.name = name;
    this.homeAddress = homeAddress;
    this.mailAddress = mailAddress;
  }
  get getName() {
    return this.name;
  }
  get getHomeAddress() {
    return this.homeAddress;
  }
  get getMailAddress() {
    return this.mailAddress;
  }
  set setName(name) {
    this.name = name;
  }
  set setHomeAddress(homeAddress) {
    this.homeAddress = homeAddress;
  }
  set setMailAddress(mailAddress) {
    this.mailAddress = mailAddress;
  }
}

module.exports = RegisterRequestBody;
