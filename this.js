// const obj = {xxx: 1};

function fun() {
    return this;
}

const f = fun();
// const f = fun.call(obj);

const arrow = () => {
    return this;
}
const a = arrow();

// ---------------------------------------

function funFun() {
    function fun() {
        return this;
    };
    return fun();
}
const ff = funFun();

function funArrow() {
    const arrow = () => {
        return this;
    }
    return arrow();
}
const fa = funArrow();

const arrowFun = () => {
    function fun() {
        return this;
    };
    return fun();
}
const af = arrow();

// -------------------------------------------------

function funFun2() {
    function funFun() {
        function fun() {
            return this;
        };
        return fun();
    }
    return funFun();
}
const ff2 = funFun2();

function funArrow2() {
    function funArrow() {
        const fun = () => {
            return this;
        };
        return fun();
    }
    return funArrow();
}
const fa2 = funArrow2();

// In Browser
// console.log('Browser:');
// console.log("a == f", a == f); // true
// console.log("a == fa", a == fa); // true
// console.log("a == ff2", a == ff2); // true
// console.log("fa == ff", fa == ff); // true

// In Node.js
console.log('Node:');
console.log("a: ", a); // a:  {}                !!!!!!!!!!
// console.log("f: ", f); // f:  Object [global]   !!!!!!!!!!
console.log("a == f", a == f); // false
console.log("fa: ", fa); // false
console.log("ff: ", fa); // false
console.log("f == fa", f == fa); // true
console.log("fa == ff", fa == ff); // true
console.log("ff2 == fa2", ff2 == fa2); // true