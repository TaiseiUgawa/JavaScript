

// const getFormData = fetch(url, get_options)
// .then(response => response.json());
// console.log(getFormData);


// console.log(formData);



document.getElementById('button')
.addEventListener('click', () => {
    const postForm = document.forms.post_form;
    const formData = new FormData(postForm); 
    
    for(let data of formData.entries()){
        console.log(`${data[0]}: ${data[1]}`);
    };

    const url = 'https://coinbaby8.com/udemy_js_api/api/udemy_js';

    const post_options = {
        method:'post',
        body: formData,
    };  

    fetch(url, post_options)
    .then( response => {
        if(response.ok){
            console.log(response);
            return response.text();
        } else {
            return new Error();
        }
    }).then( text => console.log(text))
    .catch( e => console.error(e));
});