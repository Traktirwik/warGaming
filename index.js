class Queue {

    constructor() {
        this.items = new Array(0);
    }

    length() {
        return this.items.length
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }
}

class Stack {

	constructor(){
		this.items = [];
	}

    length() {
        return this.items.length
    }

    push(element) {
        this.items.push(element);
    }
    unshift(element) {
        this.items.unshift(element)
    }
    pop(){
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
}

function array_compare(a, b) {
    if(a.length != b.length)
       return false;

    for(i = 0; i < a.length; i++)
       if(a[i] != b[i])
          return false;

    return true;
}


const root = document.getElementById('root')

let preOrder = [];
function preOrderRec(node) {
    
    let arr = [...node.children]
    preOrder.push(node.id)
    arr.forEach(item => preOrderRec(item))
}
preOrderRec(root)


let preOrder2 = []
function preOrderNotRec(node) {
    let stack = new Stack()
    let VN = []
    stack.push(node)

    while (stack.length() > 0) {
        node = stack.pop()
        preOrder2.push(node.id)

        if(node == null) {
            continue
        }
        if(node in VN) {
            continue
        }
        VN.push(node)

        let arr = [...node.children]
        let kost = arr.reverse()
        kost.forEach(item => stack.push(item))
    }
}
preOrderNotRec(root)


let postOrder = []
function postOrderRec(node) {
    let arr = [...node.children]
    arr.forEach(function(a) {
        postOrderRec(a);
        
    });
    postOrder.push(node.id)
}
postOrderRec(root)

let postOrder2 = []
function postOrderNotRec(node) {
    let stack = new Stack()
    let VN = []
    stack.push(node)
   
    while(stack.length() >0) {
        node=stack.pop()
        
        if(node==null) {
            continue
        }
        
        if(VN.includes(node)) {
            postOrder2.push(node.id)
            continue
        }
        VN.push(node)
        let arr = [...node.children]
        if(array_compare(arr,[]) == false) {
            let kost = arr.reverse()
            stack.push(node)
            kost.forEach(item => stack.push(item))
            
        } else {
            postOrder2.push(node.id)
        }
           
    }
}
postOrderNotRec(root)

let levelOrder = []
let my_queue = new Queue()
function levelOrderRec(node) {
    
    if (node == null) {
        return 1
    }
    levelOrder.push(node.id)
    let arr = [...node.children]
    arr.forEach(item => {
        my_queue.enqueue(item)
    })
    node = my_queue.dequeue()
    levelOrderRec(node)
}
levelOrderRec(root)

let levelOrder2 = []
function levelOrderNotRec(node) {
    let q = new Queue()
    let VN = []
    q.enqueue(node)

    while (q.length() > 0) {

        node = q.dequeue()
        levelOrder2.push(node.id)
    
        if (node == null) {
            continue
        }
        if (node in VN) {
            continue
        }
        VN.push(node)

        let arr = [...node.children]
        
        arr.forEach(item => q.enqueue(item))
    }   
}
levelOrderNotRec(root)

    
console.log(`Pre order with Recursion: ${preOrder}`)
console.log(`Pre order w/o Recursion: ${preOrder2}`)
console.log(`Post order with Recursion: ${postOrder}`)
console.log(`Post order w/o Recursion: ${postOrder2}`)
console.log(`Level order with Recursion: ${levelOrder}`)
console.log(`Level order w/o Recursion: ${levelOrder2}`)


