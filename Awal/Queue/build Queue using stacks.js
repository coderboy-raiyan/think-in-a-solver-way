
var MyQueue = function() {
    this.in = [];
      this.out = [];
  };
  
  /** 
   * @param {number} x
   * @return {void}
   */
  MyQueue.prototype.push = function(x) {
      this.in.push(x);
  };
  
  /**
   * @return {number}
   */
  MyQueue.prototype.pop = function() {
    if(this.out.length === 0){
        while(this.in.length>0){
            this.out.push(this.in.pop());
        }
    }  
      
      return this.out.pop();
  };
  
  /**
   * @return {number}
   */
  MyQueue.prototype.peek = function() {
        if(this.out.length === 0){
        while(this.in.length>0){
            this.out.push(this.in.pop());
        }
    }
      
      return this.out[this.out.length -1];
  };
  
  /**
   * @return {boolean}
   */
  MyQueue.prototype.empty = function() {
      return this.out.length === 0 &&  this.in.length === 0;
  };
  
  /** 
   * Your MyQueue object will be instantiated and called as such:
   * var obj = new MyQueue()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.peek()
   * var param_4 = obj.empty()
   */