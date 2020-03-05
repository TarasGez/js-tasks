let x = { a: 1, b: 2}; // X - Initial obj
console.log('X: ', x);

console.log();

/// new Object(value)

let y = new Object(x); // Y - Clobe link 2 obj
console.log('y = new Object(x)');
console.log('Y: ', y);
console.log('Y === X: ', y === x); // true

console.log();

let z = { c: 3, d: 4}; // Z - Second obj
console.log('Z: ', z);

/// Object.assign

let t = Object.assign(y, z); // T - Clone second 2 link
console.log('t = Object.assign(y, z)');

console.log('T: ', t);
console.log('T === Y: ', t === y); // true

console.log();

let p = Object.assign({}, y, z); // P - Clone X and Z 2 empty obj
console.log('p = Object.assign({}, y, z)');

console.log('P: ', p);
console.log('P === Y: ', p === y); // false

console.log();

let q = Object.assign(z, y); // Q - Clone initial obj 2 second obj
console.log('q = Object.assign(z, y)');

console.log('Q: ', q);
console.log('Q === Y: ', q === y); // false
console.log('Q === Z: ', q === z); // true

console.log();

/// Spread

let s = {...x, ...z} // Use Spread for copy like T
console.log('S: ', s);
console.log('T == S: ', t == s); // false

console.log();

x.a = 35; // Y.a, T.a changed too!!! but S nope!!!
console.log('x.a = 35');

console.log('Yx2: ', y);
console.log('Tx2: ', t);
console.log('Px2: ', p);
console.log('Qx2: ', q);
console.log('Sx2: ', s);

console.log();

z.c = 100; // T.c didn't change
console.log('z.c = 100');

console.log('Z2: ', z);
console.log('Tz: ', t);
console.log('Qz: ', q);
console.log('Sz: ', s);