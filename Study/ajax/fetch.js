const url = 'https://dog.ceo/api/breeds/image/random';
const options = {
    method: 'GET',
}

// const fetchTest = fetch(url, options)
// .then( response => response.json() );
// console.log(fetchTest);

function fetchDogImage(url, options){
    return fetch(url, options).then( response => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error('通信エラー');
        }
    }).catch(e => console.log(e.message));
};

async function fetchImage(url, options){
    const response = await fetchDogImage(url, options);
    // console.log(response.message);

    const imageElement = document.createElement('img');
    imageElement.src = response.message;
    document.body.appendChild(imageElement);
}

fetchImage(url, options);