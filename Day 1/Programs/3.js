window.addEventListener("load", () => {
    console.log("I.AM.CALLED.ONCE.THE.PAGE.LOADS");

    const pbc = document.querySelector("#parentBlockContainer");
    console.log(pbc);

    for (let i = 0; i < 20; i++) {
        const newElement = pbc.children[0].cloneNode(true);
        newElement.style.display = "flex";
        pbc.insertBefore(newElement, pbc.firstChild);
    }
});

let pbc1 = document.querySelector("#parentBlockContainer");
console.log(pbc1);

let likeMe = function() {

};