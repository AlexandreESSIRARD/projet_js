const button = document.querySelector("bouton"); //animation bouton explorer toutes les 1 secoondes
setInterval(() => {
    bouton.classList.add("heartBeat");
    bouton.addEventListener('animationend', () => {
        bouton.classList.remove("heartBeat");
    })
},1000);


const bouton = document.getElementById("bouton"); //fonction video.play afin de lancer une video au click d'un bouton
const video = document.getElementById("videoEspace");
bouton.addEventListener("click", () =>{ 
    video.play();
});


// fonction qui lance la video 

function activateVideo(){
  if(video.pause){
    video.play()
  }else{
    video.pause()
    bouton.textContent = ""
  }
}


let boutonTexteIndex = 0; //création d'une liste de textes pour changer le texte initiale sur le bouton
const boutonTextes = [
    "Zoom..",
    "x2",
    "x4",
    "x8",
    "x16",
    "x32 ",
    "x64",
    "x128",
    "x256",
    "x512",
    "x1024",
    "x2048",
    "x4096",
    "x8192",
    "x16384",
    "x32768",
    "x65536",
    "x131 072",
    "Paris",
    "Paris",  //répétition du mot paris afin de le laisser plus longtemps sur le bouton
    "Paris",
    "Paris",
    "Paris",
    "Paris",
    "Encore ?"
]

let boutonClique = false;  //fonction pour changer le texte sur le bouton dès qu'on clique une seule fois dessus
bouton.addEventListener("click", () => { 

    if (boutonClique) return;
    boutonClique = true

    const interval = setInterval(() => {
        bouton.innerHTML = boutonTextes[boutonTexteIndex]
        boutonTexteIndex++;

        if (boutonTexteIndex >= boutonTextes.length)
            clearInterval(interval)
    }, 350);
});

video.addEventListener("ended", () => { //reset le bouton explorer à la fin de la vidéo afin de pouvoir relancer directement
    boutonTexteIndex = 0;//retourne à sa valeur initiale
    boutonClique = false;//pour ne pas relancer l'animation avant qu'elle ne soit finie, si le bouton a été cliqué.
})

 // bouton incliquable 'bonus' 
const bouton2  = document.querySelector("#bouton2");

bouton2.addEventListener("mouseover",() => {
bouton2.style.position = "absolute";
    const x = Math.floor(Math.random() * window.innerHeight);
    const y = Math.floor(Math.random() * window.innerWidth);

    bouton2.style.left=`${x}px`;
    bouton2.style.top=`${x}px`;
});

bouton2.addEventListener("click",()=> { //fonction pour afficher une alerte si l'on réussit à cliquer sur le bouton 'bonus'
    alert("*ERROR* WOW TU ES VRAIMENT RAPIDE !*ERROR* ");
  });

const button2 = document.querySelector("bouton2"); //animation du bouton 'bonus toutes les 1secondes
setInterval(() => {
    bouton2.classList.add("tada");
    bouton2.addEventListener('animationend', () => {
        bouton2.classList.remove("tada");
    })
},1000);

//fait disparaitre les étoiles(background)au clic du bouton 'explorer'
const background = document.querySelectorAll('.background');
bouton.addEventListener('click',()=> {
  background.forEach(background => {
    background.style.display = 'none'; //supprime le background
  });
});


const images = [ //tableau avec les images
    "image1",
    "image2",
    "image3"
];

// code qui change le titre de la page 
const msg = [
  "Hey, bienvenue",
  "Prêt pour l'aventure ?",
  "Accrochez vous"
];

let titre = document.title; //boucle pour changer les titres de la page toutes les 5 secondes
for (let i = 0; i < msg.length; i++){
    setTimeout(function() {
        document.title = msg[i];
    },5000 * i);
}