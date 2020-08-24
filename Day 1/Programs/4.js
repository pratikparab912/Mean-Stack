window.addEventListener("load", () => {
    const pbc = document.querySelector("#parentBlockContainer");
    console.log(pbc);

    for (let i = 0; i < 20; i++) {
        const newElement = pbc.children[0].cloneNode(true);
        newElement.style.display = "flex";

        newElement.children[0].innerHTML = "Niket" + i;

        pbc.insertBefore(newElement, pbc.firstChild);
    }
});