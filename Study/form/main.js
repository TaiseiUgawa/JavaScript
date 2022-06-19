'use strict'

// const formtest1 = document.getElementById('formtest1');
// console.log(formtest1);

// Documentのform要素全て
const formTest = document.forms;
console.log(formTest);

// 各form要素
const formTest1 = document.forms.form_test1;
console.log(formTest1);

// さらり深堀
const formTest1YourName = document.forms.form_test1.your_name;
console.log(formTest1YourName);

// リアルタイム表示
formTest1YourName.addEventListener('input', () => {
    let yourNameValue = document.getElementById('your_name_value');
    yourNameValue.textContent = formTest1YourName.value;
});