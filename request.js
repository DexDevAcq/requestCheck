function getPosts(amountOfPost) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", `https://jsonplaceholder.typicode.com/posts?_limit=${amountOfPost}`);
    xhr.send();
    xhr.onload = function() {
        console.log(JSON.parse(xhr.response))
    };
}



getPosts(10)