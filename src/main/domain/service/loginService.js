'use strict';

const UserRepository = require('../../infra/UserRepository');

class LoginService {
  constructor(loginRequestBody) {
    this.loginRequestBody = loginRequestBody;
  }
  async run(){
    return this.login();
  }
  async login() {
    const userRepository = new UserRepository();
    return userRepository.select(this.loginRequestBody.mailAddress);
  }
}

module.exports = LoginService;
