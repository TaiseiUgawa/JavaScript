import './style.scss';
import 'whatwg-fetch';

console.log('webpackテストです');

const options = {
    
    rootMargin:'-100px',
};
const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll('.message-box');

targets.forEach(target => {
    observer.observe(target);
});

function callback(entries){
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}