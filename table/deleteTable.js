module.exports = async function a(arg) {
	 
	// console.log(3,client)
	let re = await client.deleteTable({
  	tableName:this.table
	})
	console.log(7,re)
	return re
}