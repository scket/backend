'use strict';

const mysql = require('promise-mysql');

class UserRepository {
  async connect() {
    return mysql.createConnection({
     host: 'rds-mysql-suketto.cimvjuntujjq.us-east-1.rds.amazonaws.com',
     user: 'suketto',
     password: 'sukettoP4ssword',
     database: 'test'
   });
  }
  async insert(name, homeAddress, mailAddress){
    const connection = await this.connect();
    const sql = 'INSERT INTO user (name, homeAddress, mailAddress) VALUES (?, ?, ?)';
    const values = [name, homeAddress, mailAddress];
    try {
      return connection.query(sql, values);
    } catch(e) {
      console.log(e);
    } finally {
      await connection.end();
    }
  }
  async select(mailAddress){
    const connection = await this.connect();
    const sql = 'SELECT * FROM user WHERE mailAddress = ?';
    const values = [mailAddress];
    try{
      const result = await connection.query(sql, values);
      return result[0];
    } catch(e) {
      console.log(e);
    } finally {
      await connection.end();
    }
  }
  delete(){

  }
  update(){

  }
}

module.exports = UserRepository;
