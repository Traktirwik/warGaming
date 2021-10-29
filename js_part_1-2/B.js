const Crypt = {
	encode(pin, key){
		if(this.keyValidation(key)){
			const res = []
			for (let num of pin ){
				res.push(key[num]) 
			}
			return res.join("")
		}else {
			throw new Error()
		}
	},
	decode(enc, key){
		if(this.keyValidation(key)){
			const res = []
			for (let num of enc){
				res.push(key.indexOf(num))
			}
			return res.join("")
		}else {
			throw new Error()
		}
	},
	keyValidation(key){
		let rep = true
		for (let i = 0; i < key.length; i++){
			if(key.toLowerCase().indexOf(key[i].toLowerCase()) !== i){
				rep = false
			}
		}
		
		return key.length == 10 && rep
	},
}
module.exports = Crypt
