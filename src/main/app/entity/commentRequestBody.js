'use strict';
/**
 * コメント投稿リクエストボディ
 */
class CommentRequestBody {
  constructor(threadId, userName, comment) {
    this.threadId = threadId;
    this.userName = userName;
    this.comment = comment;
  }
  get getThreadId() {
    return this.threadId;
  }
  get getUserName() {
    return this.userName;
  }
  get getComment() {
    return this.comment;
  }
  set setThreadId(threadId) {
    this.threadId = threadId;
  }
  set setUserName(userName) {
    this.userName = userName;
  }
  set setComment(comment) {
    this.comment = comment;
  }
}

module.exports = CommentRequestBody;
