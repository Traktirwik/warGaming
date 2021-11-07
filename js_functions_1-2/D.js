class Func {

    call(fn, context, ...args) {
        const uniqId = Date.now().toString() 

        context[uniqId] = fn

        const result = context[uniqId](...args)

        delete context[uniqId]

        return result
    }
    
    apply(fn, context, args){
        const uniqId = Date.now().toString() 
        context[uniqId] = fn
        
        let arr = []
        let newArr = args || []
        for(let i = 0; i < newArr.length; i++){
            arr.push('arr[' + i +']')
        }
        let result = eval('context[uniqId]('+ args + ')')
        delete context[uniqId]
        return result
    }
    
    bind(fn, context, ...rest){
        return function(...args) {
            const uniqId = Date.now().toString()
            context[uniqId] = fn
    
            const result = context[uniqId](...rest.concat(args))

            delete context[uniqId]
    
            return result
        }
    }
    
}

module.exports = new Func()






