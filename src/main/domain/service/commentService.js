'use strict';

const CommentRepository = require('../../infra/CommentRepository');

class CommentService {
  constructor(commentRequestBody) {
    this.commentRequestBody = commentRequestBody;
  }
  async run(){
    return this.comment();
  }
  async comment() {
    const commentRepository = new CommentRepository();
    return commentRepository.insert(
      this.commentRequestBody.threadId,
      this.commentRequestBody.userName,
      this.commentRequestBody.comment);
  }
}

module.exports = CommentService;
