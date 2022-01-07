/* All Required External Modules*/
const mysql = require("mysql");
const Promise = require("bluebird");
const ret = require("bluebird/js/release/util");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

/*This is Database configuration Object*/
const dbconfig = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "WPTExam",
};

/*This function for Connection checking*/
const checkConnection = async () => {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();
  console.log("CONNECTION ESTABLISH!!!");
  await connection.endAsync();
};

//checkConnection();

/* This is for adding new messages to tables */
const addMessages = async (user) => {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();
  const sqlquery = `insert into MESSAGE (message) values(?)`;
  await connection.queryAsync(sqlquery, [user.message]);
  //console.log("Record Added!!!");
  await connection.endAsync();
};
//const user = { message: "Good Afternoon.." };

//addMessages(user);

/*This is for selecting all messages from table */
const SelectAllMessages = async () => {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();
  const sqlquery = `select * from MESSAGE order by ID desc`;
  const list = await connection.queryAsync(sqlquery, []);
  //console.log(list);
  await connection.endAsync();

  return list;
};

//SelectAllMessages();

module.exports = { SelectAllMessages, addMessages };
