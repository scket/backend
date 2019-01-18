'use strict';

const UserRepository = require('../../infra/UserRepository');

class LoginService {
  constructor(loginRequestBody) {
    this.loginRequestBody = loginRequestBody;
  }
  run(){
    return this.login();
  }
  login() {
    const userRepository = new UserRepository();
    return userRepository.select(this.loginRequestBody);
  }
}

module.exports = LoginService;
