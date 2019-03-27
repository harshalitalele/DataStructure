/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
};

function node(val) {
    this.val = val;
    this.next = null;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    var curNode = this.head,
        i = 0;
    while(curNode != null) {
        if(i === index) {
            return curNode.val;
        } else {
            i++;
            curNode = curNode.next;
        }
    }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var nnode = new node(val);
    nnode.next = this.head;
    this.head = nnode;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var curNode = this.head,
        nnode = new node(val);
    while(curNode.next != null) {
        curNode = curNode.next;
    }
    curNode.next = nnode;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    var curNode = this.head,
        nnode = new node(val),
        i = 0;
    if(curNode == null && index == 0) {
        curNode = nnode;
    } else if(curNode.next == null && index == 1) {
        curNode.next = nnode;
    }
    while(curNode.next != null) {
        i++;
        if(index == i) {
            var nextNode = curNode.next;
            nnode.next = nextNode;
            curNode.next = nnode;
            return;
        }
        curNode = curNode.next;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    var curNode = this.head,
        i = 0;
    while(curNode.next != null) {
        i++;
        if(i === index) {
            var nextNode = curNode.next.next;
            curNode.next = nextNode;
            break;
        }
        curNode = curNode.next;
    }
};

var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtIndex(1,2);
console.log(obj.get(1));
console.log(obj.get(0));
console.log(obj.get(2));