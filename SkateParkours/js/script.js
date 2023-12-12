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

  let vitesse = 10;

  if (event.code === "ArrowRight") {
    nbrC++;
    perso.style.left = nbrC * vitesse + "px";

    setTimeout(function () {
      perso.classList.remove("rotate");
    }, 500); 
    
  } else {
    --nbrC;
    perso.style.left = nbrC * vitesse + "px";
    
    if (perso.classList != "rotate") {
      perso.classList.add("rotate");
    }
  }


  if (nbrC >= 0 && nbrC <= 19) {
    console.log("Greta");
  } else if (nbrC >= 20 && nbrC <= 39) {
    console.log("Designer");
  } else if (nbrC >= 40 && nbrC <= 49) {
    console.log("CDA");
  } else if (nbrC >= 60 && nbrC <= 79) {
    console.log("KFC");
  }
}

//verifier si  l'obstacle touche le personnage

var verification = setInterval(function () {
  var persoTop = parseInt(
    window.getComputedStyle(perso).getPropertyValue("top")
  );
  var obstaclesLeft = parseInt(
    window.getComputedStyle(obstacles).getPropertyValue("left")
  );

  if (obstaclesLeft < 20 && obstaclesLeft > 0 && persoTop >= 130) {
    obstacles.style.animation = "none";
    alert("Vous avez perdu")
  }
}, 1);
