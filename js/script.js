let immaginiIndex = 0;

const listaImmagini = document.getElementsByClassName("immagini");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", function () {
    listaImmagini[immaginiIndex].classList.remove("active")
    immaginiIndex +=1;
    listaImmagini[immaginiIndex].classList.add("active")
})

prev.addEventListener("click", function () {
    listaImmagini[immaginiIndex].classList.remove("active")
    immaginiIndex -=1;
    listaImmagini[immaginiIndex].classList.add("active")
})
