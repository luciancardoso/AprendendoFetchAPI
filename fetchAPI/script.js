/**
 * Uma FetchAPI e uma requesição assincrona
 */

function fetchApiData(){
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(data => {
            const list = document.querySelector('#fill_list');

            data.map((item) => {
                const li = document.createElement('li');

                li.setAttribute('id', item.id);
                li.innerHTML = item.title;
                // li.innerHTML = item.body;
                list.appendChild(li);
            })
        })
}