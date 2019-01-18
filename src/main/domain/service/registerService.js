'use strict';

const UserRepository = require('../../infra/userRepository');

class RegisterService {
  constructor(registerRequestBody) {
    this.registerRequestBody = registerRequestBody;
  }
  run(){
    return this.register();
  }
  register() {
    const userRepository = new UserRepository();
    return userRepository.insert(this.registerRequestBody);
  }
}

module.exports = RegisterService;
