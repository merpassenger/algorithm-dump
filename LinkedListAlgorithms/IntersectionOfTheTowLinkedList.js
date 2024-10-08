class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Solution {
    getIntersectionNode(headA, headB) {
        let firstPointer = headA;
        let secondPointer = headB;

        while (firstPointer !== secondPointer) {
            firstPointer = firstPointer ? firstPointer.next : headB;
            secondPointer = secondPointer ? secondPointer.next : headA;
        }

        return firstPointer; // or secondPointer
    }
}

// Create Linked Lists
function createLinkedList(values) {
    let dummyHead = new ListNode(null);
    let current = dummyHead;

    for (let val of values) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummyHead.next;
}

// Create Test Data
let listA = createLinkedList([4, 1, 8, 4, 5]);
let listB = createLinkedList([5, 6, 1, 8, 4, 5]);

// Create Intersection Point
listB.next.next.next = listA.next.next;


let solution = new Solution();
let intersectionNode = solution.getIntersectionNode(listA, listB);

if (intersectionNode) {
    console.log(`Intersection point: ${intersectionNode.val}`);
} else {
    console.log("Intersection point not found");
}
