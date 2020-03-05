function construct(value) {
    this.x = value;
    this.increment = function() {
        this.x++;
    }
}

var item1 = new construct(1);
console.log('1', item1.x); // 1

item1.increment();
console.log('2', item1.x); // 2

var func = item1.increment;
func();
console.log('3', item1.x); // 2

var func2 = item1.increment.bind(item1);
func2();
console.log('4', item1.x); // 3