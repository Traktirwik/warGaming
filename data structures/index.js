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

const root = document.getElementById('root')

let preOrder = [];
let list = [];
function preOrderRec(node) {
    
    let arr = []
    if(node == null) {
        return null
    }
    preOrder.push(node.id)
    if(node.firstElementChild) {
        let temp = node.firstElementChild
        while(temp.nextElementSibling+1) {
            arr.push(temp)
            temp = temp.nextElementSibling
            if(temp == null) {
                break
            }
        }
        let rev = arr.reverse()
        rev.forEach(item => {
            list.push(item)
        })
        node = list.pop()
        preOrderRec(node)
    } else {
        node = list.pop()
        preOrderRec(node)
    }
}
preOrderRec(root)


let preOrder2 = []
function preOrderNotRec(node) {

    let list1 = []
    list1.push(node)

    while (list1.length > 0) {

        node = list1.pop()
        let arr = []

        if(node == null) {
            break
        }

        preOrder2.push(node.id)

        if(node.firstElementChild) {
            let temp = node.firstElementChild
            while(temp.nextElementSibling+1) {
                arr.push(temp)
                temp = temp.nextElementSibling
                if(temp == null) {
                    break
                }
            }
            let rev = arr.reverse()
            rev.forEach(item => {
                list1.push(item)
            })
            continue
        } else {
            continue
        }
    }
}
preOrderNotRec(root)


let postOrder = []
let visitedNodes = [];
let stack1 = []
function postOrderRec(node) {

    let arr = []
    if(!node) {
        return false;
    }

    else if(visitedNodes.includes(node)) {
        postOrder.push(node.id)
        node = stack1.pop()
        postOrderRec(node)
    }

    else if(node.firstElementChild) {
        stack1.push(node)
        visitedNodes.push(node)
        let temp = node.firstElementChild
        while(temp.nextElementSibling+1) {
            arr.push(temp)
            temp = temp.nextElementSibling
            if(temp == null) {
                break
            }
        }
        let rev = arr.reverse()
        rev.forEach(item => {
            stack1.push(item)
        })

        node = stack1.pop()
        postOrderRec(node)
    } else {
        visitedNodes.push(node)
        postOrder.push(node.id)
        node = stack1.pop()
        postOrderRec(node || false)  
    }
       
}
postOrderRec(root)

let postOrder2 = []
function postOrderNotRec(node) {
    let stack = []
    let visitedNodes = []
    stack.push(node)

    while (stack.length > 0) {

        let arr = []
        node = stack.pop()

        if(visitedNodes.includes(node)) {
            postOrder2.push(node.id)
            continue
        }

        visitedNodes.push(node)
        
        if(node.firstElementChild) {
            stack.push(node)
            let temp = node.firstElementChild
            while(temp.nextElementSibling+1) {
                arr.push(temp)
                temp = temp.nextElementSibling
                if(temp == null) {
                    break
                }
            }
            let rev = arr.reverse()
            rev.forEach(item => {
                stack.push(item)
            })
            continue
        } else {
            postOrder2.push(node.id)
            continue
        }
    }
}
postOrderNotRec(root)

let levelOrder = []
let visitedNodes3 = []
let my_queue = new Queue()
function levelOrderRec(node) {
    
    let arr = []
    if(node == null) {
        return null
    }
    levelOrder.push(node.id)
    if(node.firstElementChild) {
        let temp = node.firstElementChild
        while(temp.nextElementSibling+1) {
            arr.push(temp)
            temp = temp.nextElementSibling
            if(temp == null) {
                break
            }
        }
    
        arr.forEach(item => {
            my_queue.enqueue(item)
        })
        node = my_queue.dequeue()
        levelOrderRec(node)
    } else {
        node = my_queue.dequeue()
        levelOrderRec(node)
    }   
}
levelOrderRec(root)

let levelOrder2 = []
function levelOrderNotRec(node) {
    let q = new Queue()
    q.enqueue(node)

    while (q.length() > 0) {

        let arr = []
        node = q.dequeue()
        levelOrder2.push(node.id)
    
        if (node == null) {
            continue
        }
        
        if(node.firstElementChild) {
            let temp = node.firstElementChild
            while(temp.nextElementSibling+1) {
                arr.push(temp)
                temp = temp.nextElementSibling
                if(temp == null) {
                    break
                }
            }
        
            arr.forEach(item => {
                q.enqueue(item)
            })
            continue
        } else {
            continue
        }
    }   
}
levelOrderNotRec(root)

    
console.log(`Pre order with Recursion: ${preOrder}`)
console.log(`Pre order w/o Recursion: ${preOrder2}`)
console.log(`Post order with Recursion: ${postOrder}`)
console.log(`Post order w/o Recursion: ${postOrder2}`)
console.log(`Level order with Recursion: ${levelOrder}`)
console.log(`Level order w/o Recursion: ${levelOrder2}`)





