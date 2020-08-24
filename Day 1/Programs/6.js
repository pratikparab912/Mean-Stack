window.addEventListener("load", () => {
    processLogicHere();

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);

        if (xhr.readyState == 4) {
            console.log(xhr.responseText);
        }
    };

    const url = 'https://reqres.in/api/users?page=2';
    xhr.open("GET", url);

    xhr.send();
});

let processLogicHere = function() {
    const pbc = document.querySelector("#parentBlockContainer");
    console.log(pbc);

    let postList = [
        { id: 1, post: "Hello World" },
        { id: 2, post: "Hello Universe" },
        { id: 3, post: "Hello Javascript" },
        { id: 4, post: "Hello HTML" },
        { id: 5, post: "Hello CSS" },
        { id: 6, post: "Hello DOM" },
        { id: 7, post: "Hello JSON" },
        { id: 8, post: "Hello XML" },
        { id: 9, post: "Hello Callback" },
        { id: 10, post: "Hello AJAXXXXX" },
    ];

    for (let i = 0; i < postList.length; i++) {
        let item = postList[i];

        const newElement = pbc.children[0].cloneNode(true);
        newElement.style.display = "flex";

        newElement.children[0].innerHTML = item.post;

        pbc.insertBefore(newElement, pbc.firstChild);
    }
};