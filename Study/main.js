// 知らない記法 ES6
// 条件式
'use strict'

const mathScore = 80;
const comment = (mathScore > 80) ? 'good score' : 'not good';
console.log(comment);

// for文
const scores = [10,20,30];
// one of them
for(score of scores){
    console.log(score);
}
// 
const str1 = 'テスト';
const str2 = 'です';

console.log(str1.concat(str2));

// map
const myMap = new Map();
myMap.set('id',1);
myMap.set('name','本田');5
console.log(myMap);

myMap.get('name');

const valueList = myMap.values();
for(value of valueList){
    console.log(value);
}

// Array
const fruits = [];
fruits.push('mikan');
console.log(fruits);

// callback
fruits.forEach(function(input){
    console.log(input);
});

// Arow function
const getItem = (/*引数*/) => {console.log('アロー')};
getItem();
fruits.forEach(input => console.log(input));

const userList = [1,2,3,4];
const userIdList = userList.map((value) => {
    return `user_${value}`;
});

console.table(userIdList);

// const obj = new Object();
const testScore = {
    math:90,
    japanese:79,
    english:89,
};
// オブジェクトだけメソッドの呼び出し違う
console.log(Object.values(testScore));

const postalcode = '123-4567';

const postal = {
    postalCode:'123-45678',

    checkPostalCode(string){
        // this.postalCode;
        const replaced = string.replace('-', '');
        const lenth = replaced.lenth;
        // this.postalCode.replaace('-', '').lenth;
        // return this; objiect 返すことによってメソッドテェーン

        if(lenth === 7){
            return true;
        } else {
            return false;
        }
    }
}

console.log(postal.checkPostalCode(postalcode));
console.log(postal.postalCode);