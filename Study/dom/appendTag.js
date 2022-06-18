// DOMツリー参照
const target = document.getElementById('target');
const newDiv = document.createElement('div');

newDiv.id = 'apeendID';
newDiv.classList.add('red');
newDiv.textContent = 'テキストコンテント';
// タグ追加
// target.appendChild(newDiv); //下階層
// 同階層
target.parentNode.appendChild(newDiv);

// リストなどの間に挟みたい場合
const targetList = document.getElementById('divList'); //.firstElementChild 子要素
const reference = document.querySelector('.div2');  //.ElementSibling 
const newElemnt = document.createElement('div');

newElemnt.classList.add('div4');
newElemnt.textContent = '追加文';
targetList.insertBefore(newElemnt, reference);
//                      　追加要素　　　参照
　
