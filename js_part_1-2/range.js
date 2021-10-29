module.exports = function range(num, finish, step) {

    let list = []
    let i;
    
    if(finish < num) {

        if(step) {
            if (typeof(num) === 'number' && typeof(finish) === 'number' && typeof(step) === 'number') {

                if(step < 0) {
                    i = num
                    for(i; i>finish; i=i+step) {
               
                        list.push(i)
                    }
                    return list
                }
        
                if(step > 0) {
                    return undefined
                }

            } else {
                return undefined
            }
        }
        
        
        if (typeof(num) === 'number' && typeof(finish) === 'number') {
            i = num
            for(i; i>finish; i--) {

                list.push(i)
            }
            return list
        } else {
            return undefined
        }
        
    }

    if (step) {

        if (typeof(num) === 'number' && typeof(finish) === 'number' && typeof(step) === 'number') {
            if(step>0) {
                i = num
                for(i; i<finish; i=i+step) {
               
                    list.push(i)
                }
                return list
            }
    
            if(step<0) {
                return undefined
            }

        } else {
            return undefined
        }
    }


    if(finish){

        if (typeof(num) === 'number' && typeof(finish) === 'number') {
            i = num
            for(i; i<finish; i++) {
        
                list.push(i)
            }
            return list

        } else {
            return undefined
        }
        
    }


    if(num) {
        if (typeof(num) === 'number') {

            if(num<0) {
                for(i=0; i>num; i--) {
           
                    list.push(i)
                }
                return list
            }
    
            if(num>0) {
                for(i=0; i<num; i++) {
           
                    list.push(i)
                }
                return list
            }

        } else {
            return undefined
        } 
    }  
}

