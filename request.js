function getPosts(amountOfPost) {
    return  new Promise((res, rej) => {
            let xhr = new XMLHttpRequest();

            xhr.open("GET", `https://jsonplaceholder.typicode.com/posts?_limit=${amountOfPost}`);
            xhr.send();
            xhr.onload = function() {
                res(JSON.parse(xhr.response))
            };
    })
}



getPosts(10).then(data => {
    console.log(data)
})