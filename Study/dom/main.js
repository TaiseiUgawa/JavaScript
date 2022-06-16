// 返り値がエレメント
const input = document.getElementById('test');
input.type = 'text';
input.placeholder = 'aaa';
input.name = 'test';

const anchor = document.createElement('a');
anchor.href = 'https://google.com'
anchor.target = '_blank';
anchor.textContent = 'テストです';
console.log(anchor);

// input.setAttribute('type','text');
// test.classList.add('red');
// 一つの要素しか指定できない
// const testList = document.querySelector('.test_list');
// testList.classList.remove('blue');

// // 
// const testLists = document.querySelectorAll('.test_list');
// console.log(test);
// console.log(testList);
// console.log(testLists);