'use strict';

const UserRepository = require('../../infra/userRepository');

class RegisterService {
  constructor(registerRequestBody) {
    this.registerRequestBody = registerRequestBody;
  }
  async run(){
    return this.register();
  }
  async register() {
    const userRepository = new UserRepository();
    return userRepository.insert(
      this.registerRequestBody.name,
      this.registerRequestBody.homeAddress,
      this.registerRequestBody.mailAddress);
  }
}

module.exports = RegisterService;
