let gdb = require('gg-tablestore')
// let gdb = require('../gg-tablestore/index.js')
let db = require('./db.js')
// let client = 0
// console.log(5)
// function tbs_ori(arg) {
// 	console.log(7)
// 	// this.gdb
// 	// this.client
// }

// tbs_ori.prototype.connect = function function_name(account) {
// 	// this.account = account
// 	// client =  new TableStore.this.gdb(account);
// 	// gdb.connect(account)
// 	console.log(16,db)
// 	let gdb_db = gdb().connect(account)
// 	// console.log(gdb_db)
	
// 	db.setGdb(gdb_db)
// 	return db.db
// }
module.exports = function tbs(arg) {
	// let aa = new tbs_ori(arg)
	// // console.log(23,aa.creatTable)
	// return aa
	let gdb_db = gdb(arg)
	// console.log(gdb_db)
	
	db.setGdb(gdb_db)
	return db.db
}


// console.log(2,global.client)