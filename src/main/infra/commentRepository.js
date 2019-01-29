'use strict';

const mysql = require('promise-mysql');

class CommentRepository {
  async connect() {
    return mysql.createConnection({
     host: 'rds-mysql-suketto.cimvjuntujjq.us-east-1.rds.amazonaws.com',
     user: 'suketto',
     password: 'sukettoP4ssword',
     database: 'test'
   });
  }
  async insert(threadId, userName, comment){
    const connection = await this.connect();
    const sql = 'INSERT INTO comment (threadId, userName, comment) VALUES (?, ?, ?)';
    const values = [threadId, userName, comment];
    try {
      return connection.query(sql, values);
    } catch(e) {
      console.log(e);
    } finally {
      await connection.end();
    }
  }
  select(){

  }
  delete(){

  }
  update(){

  }
}

module.exports = CommentRepository;
