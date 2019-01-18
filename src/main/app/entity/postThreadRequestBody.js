'use strict';
/**
 * スレッド投稿リクエストボディ
 */
class PostThreadRequestBody {
  constructor(title, userName, content) {
    this.title = title;
    this.userName = userName;
    this.content = content;
  }
  get getTitle() {
    return this.title;
  }
  get getUserName() {
    return this.userName;
  }
  get getContent() {
    return this.Content;
  }
  set setTitle(title) {
    this.title = title;
  }
  set setUserName(userName) {
    this.userName = userName;
  }
  set setContent(content) {
    this.content = content;
  }
}

module.exports = PostThreadRequestBody;
