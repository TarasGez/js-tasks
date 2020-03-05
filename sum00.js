function sum(a) {
    let count = a;

    function fun(b) {
        count += b;
        return fun;
    }

    fun.toString = function() {
        return count;
    };
    
    return fun;
}



console.log(sum(1)) // == 1
console.log(sum(1)(2)) // == 3
console.log(sum(1)(2)(3)) // == 6;