function node(val) {
    this.val = val;
    this.next = null;
}

function linkedList() {
    this.head = null;
}

linkedList.prototype.addNode = function(node) {
    node.next = this.head;
    this.head = node;
}

linkedList.prototype.get = function(i) {
    var curNode = this.head,
        index = 0;
    while(curNode != null) {
        if(index == i) {
            return curNode;
        } else {
            index++;
            curNode = curNode.next;
        }
    }
}

var ll1 = new linkedList(),
    node1 = new node(1),
    node2 = new node(2),
    node3 = new node(3),
    node4 = new node(4),
    node5 = new node(7),
    node6 = new node(6),
    node7 = new node(5);

ll1.addNode(node1);
ll1.addNode(node2);
ll1.addNode(node3);
ll1.addNode(node4);
ll1.addNode(node5);
ll1.addNode(node6);
ll1.addNode(node7);

var currentNode = ll1.head;
while(currentNode != null) {
    //console.log(currentNode.val);
    currentNode = currentNode.next;    
}

console.log(ll1.get(0));