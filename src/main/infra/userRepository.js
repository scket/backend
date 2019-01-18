'use strict';

const mysql = require('mysql');

class UserRepository {
  constructor(){
    this.table = 'user';
    this.connection = mysql.createConnection({
      host: 'rds-mysql-suketto.cimvjuntujjq.us-east-1.rds.amazonaws.com',
      user: 'suketto',
      password: 'sukettoP4ssword',
      database: 'test'
    });
    this.connection.connect();
    console.log('connect');
  }
  insert(name, homeAddress, mailAddress){
    this.connection.query({
      sql: 'INSERT INTO user (name, homeAddress, mailAddress) VALUES (?, ?, ?)',
      timeout: 5000,
      values: [name, homeAddress, mailAddress]
    }, function (error, results, fields){
      if (error) throw error;
    });
    return 'ok';
  }
  select(){

  }
  delete(){

  }
  update(){

  }
}

module.exports = UserRepository;
