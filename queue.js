class Queue{
    constructor(){
        this.array = [];
        this.first = null;
    }

    enqueue(element){
        if (!element) {
            return 'There´s no element'
        }

        this.array.push(element);
        if (this.array.length === 1) {
            this.first = element;
        }
        return `The element ${element} was appended`
    }

    dequeue(){
        if (!this.array.length) {
            return 'There´ no elements';
        }
        const removed = this.array.shift();
        this.first = this.array[0];
        return `The element ${removed} was removed`;
    }

    peak(){
        if (this.array.length === 0) {
            return 'There´ no elements';
        }
        return `The first element is: ${this.first}`;
    }
}

const queue = new Queue();

console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
console.log(queue.dequeue());
console.log(queue.peak());
console.log(queue)
