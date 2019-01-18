'use strict';

const ThreadRepository = require('../../infra/ThreadRepository');

class SearchListService {
  constructor(searchListRequestBody) {
    this.searchListRequestBody = searchListRequestBody;
  }
  run(){
    return this.searchList();
  }
  searchList() {
    const threadRepository = new ThreadRepository();
    return threadRepository.select(this.searchListRequestBody);
  }
}

module.exports = SearchListService;
