function test1(){
    return 'function1';
};

async function asyncFunction(){
    return 'asyncFunction';
    //    Promise Object
};

console.log(test1());
console.log(asyncFunction());

function watting(seconds){
    return new Promise(ok => {
        setTimeout(() => {
            ok();
        }, seconds * 1000);
    })
};

async function asyncFunction2(){
    console.log('1');
    await watting(2);
    console.log('3');
    await watting(1);
    console.log('5');
}

asyncFunction2();