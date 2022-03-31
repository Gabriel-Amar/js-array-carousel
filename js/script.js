const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consecteturentore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temnventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const contenitore = document.getElementById("contenitore");

let imgContent = "";

for (let i = 0; i < items.length; i++){
    const immagini = document.createElement("div");
    
    immagini.setAttribute("class", "immagini");
    
    let titolo = document.createElement("div");
    
    titolo.setAttribute("class", "nomepaese");
    
    titolo.innerHTML = (title[i])

    let testo = document.createElement("div")

    testo.setAttribute("class", "testo")

    testo.innerHTML = (text[i])

    let img = document.createElement("img");
    
    img.setAttribute("src", items[i]);
    
    contenitore.append(immagini);
    
    immagini.append(img)
    
    immagini.append(titolo)

    immagini.append(testo)
}

const contenitore2 = document.getElementById("contenitore2");

const row = document.createElement("div");

row.setAttribute("class", "row");
for (let i = 0; i < items.length; i++){

    let column = document.createElement("div");
    
    column.setAttribute("class", "column");
    
    let img2 = document.createElement("img");
    
    img2.setAttribute("src", items[i]);
    
    contenitore2.append(row);
    
    row.append(column)
    
    column.append(img2)
}

const next = document.createElement("div");

next.setAttribute("class", "next");

const prev = document.createElement("div");

prev.setAttribute("class", "prev");

next.innerHTML = ("&#8681;")

prev.innerHTML = ("&#8679;")

row.append(next)

row.append(prev)


let immaginiIndex = 0;
// const immagini2 = document.getElementsByClassName("column");
// const immagini2Light = immagini2[0];
// immagini2Light.setAttribute("class", "column actives")

const immagini = document.getElementsByClassName("immagini");
const immagineActive = immagini[0];
immagineActive.setAttribute("class", "immagini active")

next.addEventListener("click", function () {
    immagini[immaginiIndex].classList.remove("active")
    immaginiIndex +=1;
    if (immaginiIndex > 4) {
    immaginiIndex = 0;
    }
    immagini[immaginiIndex].classList.add("active");
    
    // immagini2[immaginiIndex].classList.remove("actives")
    // immaginiIndex +=1;
    // immagini2[immaginiIndex].classList.remove("actives");
    
})
prev.addEventListener("click", function () {
    immagini[immaginiIndex].classList.remove("active")
    immaginiIndex -=1;
    if(immaginiIndex < 0){
        immaginiIndex = 4;
    }
    immagini[immaginiIndex].classList.add("active")

    // immagini2[immaginiIndex].classList.add("actives")
    // immaginiIndex -=1;
    // immagini2[immaginiIndex].classList.remove("actives");
})




















/*
<div class="immagini active">
<div class="citta">Roma</div>
<img src="./img/01.jpg" class="active" alt="Foto">
</div>
<div class="immagini">
<div class="citta">Londra</div>
<img src="./img/02.jpg"  alt="Foto">
        </div>
        <div class="immagini">
            <div class="citta">Parigi</div>
            <img src="./img/03.jpg"  alt="Foto">
        </div>
        <div class="immagini">
            <div class="citta">Milano</div>
            <img src="./img/04.jpg"  alt="Foto">
        </div>
        <div class="immagini">
            <div class="citta">Madrid</div>
            <img src="./img/05.jpg" alt="Foto">
        </div>
        <div class="container2">
            <div class="row">
                <div class="column">
                    <img src="./img/01.jpg" alt="">
                </div>
                <div class="column">
                    <img src="./img/02.jpg" alt="">
                </div>
            <div class="column">
                <img src="./img/03.jpg" alt="">
            </div>
            <div class="column">
                <img src="./img/04.jpg" alt="">
            </div>
            <div class="column">
                <img src="./img/05.jpg" alt="">
            </div>
            <div class="next">&#8681;</div>
            <div class="prev">&#8679;</div>
        </div>
        </div> */