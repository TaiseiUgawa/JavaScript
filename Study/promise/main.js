'use strict'

function promiseTest1(){
    return new Promise( ok => {
        ok('プロミス1です');
    });
};

const promiseTest2 = new Promise(ok => {
    ok('プロミス2です');
});

function promiseTest3(input){
    return new Promise(ok => {
        ok(`${input}`);
    })
}

// console.log(promiseTest1());
// console.log(promiseTest2);
// console.log(promiseTest3('田中'));

function promiseTest4(pay, seconds){
    return new Promise((ok, ng) => {
        setTimeout(() => {
            if(pay > 100){
                let change = pay - 200;
                console.log(`${seconds}秒,お釣りは${change}です`);
                ok(change);
            };
            ng('お金が足りません');    
        }, seconds * 1000);
    });
};

// console.log(promiseTest4(80).catch( e => {console.log(e);}));

// promiseTest4(180).then(change => {
//     console.log(change);
//     return promiseTest4(change);
// }).then(change => {
//     console.log(change);
// }).catch(e => {console.log(e);});

console.log(1);
promiseTest4(400, 3)
.then(change1 => {promiseTest4(change1, 1);})
.then(change1 => {promiseTest4(change1, 2);})
.catch(e => console.log(e));
console.log(3);