// 非推奨
// document.getElementById('targetButton').onclick = function(){
//     const test = document.getElementById('test');
//     test.textContent = 'テスト';
//     test.classList.add('red');
// }

// 推奨
const targetButton = document.getElementById('targetButton');
targetButton.addEventListener('click', (e) => {
    console.log(e);
    const test = document.getElementById('test');
    test.textContent = 'テスト';
    test.classList.add('red');
    e.stopPropagation(); // stop event 
    // e.preventDefault(); a tag 
})

// 1 Capturephase => 2 TargetPhase => BubblingPhase
