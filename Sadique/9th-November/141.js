// 141. Linked List Cycle

// // Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.


// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.


// Below is a cyclic linked list
const o4 = {val: -4, next: null}
const o3 = {val: 0, next: o4}
const o2 = {val: 2, next: o3}
const o1 = {val: 3, next: o2}
o4.next = o2


const hasCycle = head => {
    let fast = head
    let slow = head

    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) return true
    }
    return false
}

