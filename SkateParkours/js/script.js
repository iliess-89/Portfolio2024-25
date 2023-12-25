var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");

///creer une function recuperer les codeKey (Espace / left / right)

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    sauter();
  } else if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
    deplacement(event);
  }
});

function sauter() {
  // function pour faire sauter le personnage
  if (perso.classList != "animation") {
    perso.classList.add("animation");
  }
  setTimeout(function () {
    perso.classList.remove("animation");
  }, 500);
}

let nbrC = 0;

function deplacement(event) {
  // function pour faire tourné a Droite le personnage

  let vitesse = 1;

  if (event.code === "ArrowRight") {
    nbrC++;
    perso.style.left = nbrC * vitesse + "%";

    setTimeout(function () {
      perso.classList.remove("rotate");
    }, 500); 
    
  } else {
    --nbrC;
    perso.style.left = nbrC * vitesse + "%";
    
    if (perso.classList != "rotate") {
      perso.classList.add("rotate");
    }
  } 

  if (nbrC >= 10 && nbrC <= 19) {
    console.log("Greta");
    let modal = document.querySelector(".modal");
    modal.style.display = "block";
  } else if (nbrC >= 20 && nbrC <= 39) {
    console.log("Designer");
     let modal2 = document.querySelector(".modal2");
     modal2.style.display = "block";
  } else if (nbrC >= 40 && nbrC <= 49) {
    console.log("CDA");
     let modal3 = document.querySelector(".modal3");
     modal3.style.display = "block";
  } else if (nbrC >= 60 && nbrC <= 79) {
    console.log("KFC");
     let modal4 = document.querySelector(".modal4");
     modal4.style.display = "block";
  }
}
  
//verifier si  l'obstacle touche le personnage

var verification = setInterval(function () {
  var persoTop = parseInt(
    window.getComputedStyle(perso).getPropertyValue("top")
  );

  // console.log(persoTop);

  var persoLeft = parseInt(
    window.getComputedStyle(perso).getPropertyValue("left")
  );

  // console.log("le personnage va a gauche " + persoLeft);

  var persoRight = parseInt(
    window.getComputedStyle(perso).getPropertyValue("right")
  );

  // console.log("le personnage va a droite " + persoRight);

  var obstaclesLeft = parseInt(
    window.getComputedStyle(obstacles).getPropertyValue("left")
  );

  console.log(obstaclesLeft);
  console.log("Perso saute: " + persoTop);
  console.log("Perso droite: " + persoRight);
  console.log("Perso gauche  : " + persoLeft);

  // on verifie si obstacle touche le personnage

  // if (obstaclesLeft <= persoLeft) {
  //   obstacles.style.animation = "none";
  //   alert("Vous avez perdu"); 
  // }

  if (persoTop >= 118){
    alert("le personnage viens de sauter " + persoTop )
  }

 
    if (obstaclesLeft < 20 && obstaclesLeft > 0 && persoTop >= 130) {
      obstacles.style.animation = "none";
      alert("Vous avez perdu");
    }
}, 1);
