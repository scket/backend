'use strict';

const ThreadRepository = require('../../infra/ThreadRepository');

class PostThreadService {
  constructor(postThreadRequestBody) {
    this.postThreadRequestBody = postThreadRequestBody;
  }
  async run(){
    return this.postThread();
  }
  async postThread() {
    const threadRepository = new ThreadRepository();
    return threadRepository.insert(
      this.postThreadRequestBody.title,
      this.postThreadRequestBody.userName,
      this.postThreadRequestBody.content);
  }
}

module.exports = PostThreadService;
