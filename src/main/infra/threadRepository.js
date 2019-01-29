'use strict';

const mysql = require('promise-mysql');

class ThreadRepository {
  async connect() {
    return mysql.createConnection({
     host: 'rds-mysql-suketto.cimvjuntujjq.us-east-1.rds.amazonaws.com',
     user: 'suketto',
     password: 'sukettoP4ssword',
     database: 'test'
   });
  }
  async insert(title, userName, content){
    const connection = await this.connect();
    const sql = 'INSERT INTO thread (title, userName, content) VALUES (?, ?, ?)';
    const values = [title, userName, content];
    try {
      return connection.query(sql, values);
    } catch(e) {
      console.log(e);
    } finally {
      await connection.end();
    }
  }
  async select(id){
    const connection = await this.connect();
    const sql = 'SELECT * FROM thread WHERE id = ?';
    const values = [id];
    try{
      const result = await connection.query(sql, values);
      return result[0];
    } catch(e) {
      console.log(e);
    } finally {
      await connection.end();
    }
  }
  async delete(){

  }
  async update(){
  }
}

module.exports = ThreadRepository;
