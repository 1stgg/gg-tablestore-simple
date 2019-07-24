module.exports = async function listTable(arg) {
	 
	// console.log(3,this.gdb().listTable())
	let re = await this.gdb().listTable()
	// console.log(5,re)
	return re
}