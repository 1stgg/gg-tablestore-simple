
let default2 = require('./default.js')
function gdb(argument) {
	// body...
}
function db_ori(table) {
	this.gdb = gdb
	this.table = table
	// this.index
	// this.whereValue
	this.limitValue = default2.limit
	this.pageValue = default2.page
	this.countValue = default2.count

	// this.fieldValue
	// this.fieldValue

	// this.searchQuery
	// this.columnToGet
}
let fileList = require('./fileList.js')
for(let key in fileList){
	let item = fileList[key]
	db_ori.prototype[key] = require(item)
}

// module.exports =  function 

module.exports = {
	setGdb(e){
		console.log(31,e)
		gdb = e
	},
	db(arg) {
		let aa = new db_ori(arg)
		// console.log(23,aa.creatTable)
		return aa
	}
}