class Stack{
    constructor(){
        this.array = [];
        this.last = null;
    }

    push(element){
        if (!element) {
            return 'There´s no element'
        }
        this.array.push(element);
        this.last = element;
        return `The element ${element} was appended`;
    }

    pop(){
        if (!this.array.length) {
            return 'There´ no elements';
        }
        const removed = this.array.pop();
        this.last = this.array[this.array.length-1]
        return `The element ${removed} was removed`;
    }

    peak(){
        if (this.array.length === 0) {
            return 'There´ no elements';
        }
        return `The last element is: ${this.last}`;
    }
}

const stack = new Stack();

console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.pop());
console.log(stack.peak());
console.log(stack.pop());
console.log(stack.peak());
