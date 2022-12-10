// This is an input class. Do not edit.
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
      // Write your code here.
       if(this.head == null){
        this.head = node;
        this.tail = node
        return;
      }
      this.insertBefore(this.head, node);
    }
  
    setTail(node) {
      // Write your code here.
       if(this.tail== null){
         this.setHead(node)
      }
  
      this.insertAfter(this.tail, node)
    }
  
    insertBefore(node, nodeToInsert) {
      // Write your code here.
      if(this.head == nodeToInsert && this.tail == nodeToInsert){
        return;
      }
         this.remove(nodeToInsert);
      nodeToInsert.prev = node.prev;
      nodeToInsert.next = node;
      if(node.prev == null){
        this.head = nodeToInsert;
      }else{
        node.prev.next = nodeToInsert;
      }
  
      node.prev = nodeToInsert;
    }
  
    insertAfter(node, nodeToInsert) {
      // Write your code here.
        if(this.head == nodeToInsert && this.tail == nodeToInsert){
        return;
      }
  
      this.remove(nodeToInsert);
      nodeToInsert.next = node.next;
      nodeToInsert.prev = node;
      if(node.next){
        node.next.prev = nodeToInsert;
      }else{
        this.tail = nodeToInsert;
      }
  
      node.next = nodeToInsert
    }
  
    insertAtPosition(position, nodeToInsert) {
      // Write your code here.
    let curr = this.head;
      let currPosition = 1;
      while(curr && position !== currPosition){
        curr = curr.next;
        currPosition++;
      }
      if(curr !== null){
        this.insertBefore(curr, nodeToInsert) 
      }else{
        this.setTail(nodeToInsert)
      }
     
    }
  
    removeNodesWithValue(value) {
      // Write your code here.
      let curr = this.head;
      while(curr){
       let nodeToRemove = curr;
        curr = curr.next;
        if(nodeToRemove.value == value){
          this.remove(nodeToRemove);
        }
      }
    }
  
  remove(node) {
      // Write your code here.
      //edge case check
      if(node == this.head){
        this.head = this.head.next;
      }
      if(node == this.tail){
        this.tail = this.tail.prev;
      }
  
      this.removeNodesBindings(node)
      
    }
  
    removeNodesBindings(node){
        if(node.prev){
          node.prev.next = node.next
        }
      if(node.next){
        node.next.prev = node.prev
      }
  
      node.prev =null;
      node.next = null;
    }
  
    containsNodeWithValue(value) {
      // Write your code here.
      let curr = this.head;
      while(curr && curr.value !== value){
        curr = curr.next;
      }
      return curr !== null;
    }
  }
  

  