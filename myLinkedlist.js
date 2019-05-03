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
    return -1;
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
    if(curNode == null) {
        if(index == 0) {
            this.head = nnode;
        }
    } else if(curNode.next == null) {
        if(index == 0) {
            nnode.next = curNode;
            this.head = nnode;
        } else if(index == 1) {
            this.head.next = nnode;
        }
    } else {
        while(curNode != null) {
            i++;
            if(index == i) {
                var nextNode = curNode.next;
                nnode.next = nextNode;
                curNode.next = nnode;
                return;
            }
            curNode = curNode.next;
        }
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
obj.addAtHead(7);
obj.addAtHead(2);
obj.addAtHead(1);
obj.addAtIndex(3,0);
obj.deleteAtIndex(2);
obj.addAtHead(6);
obj.addAtTail(4);
console.log(obj.get(4));
obj.addAtHead(4);
obj.addAtIndex(5,0);
obj.addAtHead(6);


/*
["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"]
[[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]]*/