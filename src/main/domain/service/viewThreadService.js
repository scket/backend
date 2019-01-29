'use strict';

const ThreadRepository = require('../../infra/ThreadRepository');

class ViewThreadService {
  constructor(id) {
    this.id = id;
  }
  async run(){
    return this.viewThread(this.id);
  }
  async viewThread(id) {
    const threadRepository = new ThreadRepository();
    return threadRepository.select(id);
  }
}

module.exports = ViewThreadService;
