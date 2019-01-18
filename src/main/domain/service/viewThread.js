'use strict';

const ThreadRepository = require('../../infra/ThreadRepository');

class ViewThreadService {
  constructor(threadId) {
    this.theadId = threadId;
  }
  run(){
    return this.viewThread();
  }
  viewThread() {
    const threadRepository = new ThreadRepository();
    return threadRepository.select(this.threadId);
  }
}

module.exports = ViewThreadService;
