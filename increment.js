// Class
class Increment {
    constructor() {
        this.count = 0;
        this.toString = function () {
            this.count++;
            return this.count;
        };
    }
}

// Class version 2
class Increment0 {
    constructor() {
      this.value = 0;
    }
    toString() {
      this.value ++;
      return this.value;
    }
  }

// Function
function Increment2() {
    this.count = 0;
    this.toString = function() {
        this.count++;
        return this.count;
    }
}

// Function version 2
var Increment3 = function() {
    this.count = 0;
    
    let fun = {};
    fun.toString = () => {
      this.count++;
      return this.count;
    }
    
    return fun
}

var increment = new Increment3()

console.log('val: ' + increment) // val: 1
console.log('val: ' + increment) // val: 2
console.log('val: ' + increment) // val: 3
