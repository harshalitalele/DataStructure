function MyCircularQueue(k) {
    this.queue = new Array(k);
    this.head = 0;
    this.tail = -1;
    this.size = 0;
}

MyCircularQueue.prototype.enQueue = function(value) {
    if(this.size != this.queue.length) {
        this.tail++;
        this.tail = this.tail % this.queue.length;
        this.queue[this.tail] = value;
        this.size++;
        return true;
    } else {
        //console.error("queue full");
        return false;
    }    
}

MyCircularQueue.prototype.deQueue = function() {
    if(this.size > 0) {
        var tempVal = this.queue[this.head];
        this.queue[this.head] = undefined;
        this.head++;
        this.head = this.head % this.queue.length;
        this.size--;
        return true;
    } else {
        //console.error("queue is empty");
        return false;
    }    
}

MyCircularQueue.prototype.isEmpty = function() {
    return this.size == 0;
}

MyCircularQueue.prototype.isFull = function() {
    return this.size == this.queue.length;
}

MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) {
        return -1;
    }
    return this.queue[this.head];
}

MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) {
        return -1;
    }
    return this.queue[this.tail];
}

var myq = new MyCircularQueue(3);
myq.enQueue(1);
myq.enQueue(2);
myq.enQueue(3);
myq.enQueue(4);
myq.Rear();
myq.isFull();
myq.deQueue();
myq.enQueue(4);
myq.Rear();


