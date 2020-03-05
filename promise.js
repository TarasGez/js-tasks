//////// setTimeout
function timeout() {
    for (var i = 0; i < 4; i++) {
        setTimeout(() => console.log(i), 0);
    }
}
//timeout(); // 4, 4, 4, 4

/////// setTimeout VS Promise
const prom = () => {
    setTimeout(() => console.log("9. END"), 0);

    console.log("1. First");

    new Promise(
        () => {
            console.log("2. Pending...");
        }
    ).then(
        console.log("3. First then") // native code in then will be started immediately
        // () => console.log("5. First then") // will be started after netive code in 4 block
    );

    console.log("4. After 1st prms");
    console.log();

    new Promise(
        (resolve, reject) => {
            console.log("5. Pending...");
                    
            resolve(true);
            reject(false);

            console.log("6. After resolve");
        }
    ).then(
        (successMessage) => {
            console.log("8. Second then. Resolve:", successMessage)
        } // function will be AFTER next native code
    ).catch(
        (error) => {
            console.log("8. ERROR:", error)
        }
    );

    console.log("7. Last log");
}
// prom();


/////// Promise 2
const prom2 = () => {
    setTimeout(() => console.log('6'), 0);
    
    console.log('1');

    new Promise((resolve) => {
        console.log('2');
        resolve(true);
    })
    .then(
        setTimeout(() => console.log('3'), 0) 
    )
    .then(
        console.log('4')
    );

    console.log('5');
}
prom2();

//
function doSomething(res) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`2. doSomething, result: ${res}`);
            resolve(22);
        }, 2000);
    })
}

function doSomethingElse(res) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`3. doSomethingElse, result: ${res}`);
            resolve(333);
        }, 1000);
    })
}

/*
Promise.resolve(44)
    .then((res) => console.log(`1. ${res}`) || res) // 1. 44
    .then((res) => doSomething(res)) // 2 sec
    .then((res) => doSomethingElse(res)) // 1 sec
    .then((res) => console.log(`4. Last then, result: ${res}`)) // 
*/


////////////////////////////////////

function funProm() {
    var a = 5;
    setTimeout(function timeout() {
        console.log(a); // 3. 25
        a = 10;
    }, 0);

    var p = new Promise(function(resolve, reject) {
        console.log(a); // 1. 5
        a = 25;
        resolve();
    });

    p.then(function(){
        // some code
    });

    console.log(a); // 2. 25
}

// funProm();

///////////////////////////////////////////////////////////////////

function createUser(name) {
    console.log('createUser -> name: ', name);
    
    return new Promise((resolve) => {
        setTimeout( () => {
            const user = {'id': 1, 'name': name};

            console.log('createUser -> user: ', user);
            resolve(user);
        }, 2000);
    });
};

function addAge(user, age) {
    console.log('addAge -> age: ', age);

    return new Promise((resolve) => {
        setTimeout( () => {
            console.log('addAge -> user: ', user);
            resolve({...user, 'age': age});
        } , 2000);
    });
};

function printU(user) {
    console.log('printUser -> user: ', user);
}

// Promise.resolve(
//     createUser('John')
// )
// .then(function(resUser) {
//     console.log('--- createUser log: ', resUser);
//     return addAge(resUser, 35)
// })
// .then(function(res) {
//     printU(res)
// })
// .catch((err) => console.log('ERROR: ', err));