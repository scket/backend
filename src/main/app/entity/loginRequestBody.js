'use strict';
/**
 * ユーザログインリクエストボディ
 * パスワードは不要かも
 */
class LoginRequestBody {
  construtor(nameOrAddress, password) {
    this.nameOrAddress = nameOrAddress;
    this.password = password;
  }
  get getNameOrAddress() {
    return this.nameOrAddress;
  }
  get getPassword() {
    return this.Password;
  }
  set setNameOrAddress(nameOrAddress) {
    this.nameOrAddress = nameOrAddress;
  }
  set setPassword(password) {
    this.password = password;
  }
}

module.exports = LoginRequestBody;
