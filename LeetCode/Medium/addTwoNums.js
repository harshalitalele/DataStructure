function ListNode(val) {
    this.val = val;
    this.next = null;
}

function addTwoNums() {
    var result = null,
        resultPointer = result,
        curNode1 = l1,
        curNode2 = l2,
        carryFrwd = 0;
    
    while(curNode1 && curNode2) {
        var curVal1 = curNode1.val,
            curVal2 = curNode2.val,
            sum = curVal1 + curVal2,
            newVal = (sum % 10) + carryFrwd,
            carryFrwd = Math.floor(sum / 10),
            newNode = new ListNode(newVal);
        
        if(result != null) {
            resultPointer.next = newNode;
            resultPointer = resultPointer.next;
        } else {
            result = newNode;
            resultPointer = result;
        }
        
        curNode1 = curNode1.next;
        curNode2 = curNode2.next;
    }
    
    if(carryFrwd != 0) {
        newNode = new ListNode(carryFrwd);
        resultPointer.next = newNode;
    }
    
    printLinkedList(result);
    
}

function printLinkedList(l) {
    var tempPointer = l;
    while(tempPointer) {
        console.log(tempPointer.val + "->");
        tempPointer = tempPointer.next;
    }
}

function createLinkedList(valArr) {
    var list = null,
        curPointer = list;
    for(var i in valArr) {
        var value = valArr[i],
            newNode = new ListNode(value);
        if(list != null) {
            curPointer.next = newNode;
            curPointer = curPointer.next;
        } else {
            list = newNode;
            curPointer = list;
        }
    }
    return list;
}

var l1 = createLinkedList([1,2,3,4]);
var l2 = createLinkedList([1,2,7,7]);



