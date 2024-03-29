let TableStore = require('tablestore')
let tableDataType = require('../table/to/tableDataType.js')
module.exports = async function a(arg) {
	 
	let col = []
	for(let key in arg.data){
		let item = arg.data[key]
		
		col.push({
			[key]:tableDataType(item)
		})
	}
	// console.log(col)
	let key_arr = []
	for(let key in arg.key){
		let item = arg.key[key]
		switch(typeof(item)){
		    case 'number' :
		    	item = TableStore.Long.fromNumber(item)
		        break
		    default :
		    	// key_arr.push({[key]:item})
		        break
		}

		key_arr.push({
			[key]:item
		})
	}
	// console.log(3,key_arr)
	let re = await client.putRow({
	  tableName: this.table,
	  condition: new TableStore.Condition(TableStore.RowExistenceExpectation.EXPECT_NOT_EXIST, null),
	  primaryKey: key_arr,
	  attributeColumns: col,
	  returnContent: { returnType: TableStore.ReturnType.Primarykey }
	})
	console.log(169,'add',re)
	return re
}