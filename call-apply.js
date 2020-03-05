function add(c, d) {
    return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

add.call(o, 5, 7); // 16

add.apply(o, [5, 7]); // 16

function add2(...args) {
    console.log('args: ', args);
    return args.reduce(
        function(sum, val) {
            return sum + val;
        }, 0
    );
}

const arr = [3, 2, 5];
console.log('call: ', add2.call(null, ...arr)) // 6
console.log('apply: ', add2.apply(null, arr)) // 6
