'use strict';

const ThreadRepository = require('../../infra/ThreadRepository');

class PostThreadService {
  constructor(postThreadRequestBody) {
    this.postThreadRequestBody = postThreadRequestBody;
  }
  run(){
    return this.postThread();
  }
  postThread() {
    const threadRepository = new ThreadRepository();
    return threadRepository.insert(this.postThreadRequestBody);
  }
}

module.exports = PostThreadService;
