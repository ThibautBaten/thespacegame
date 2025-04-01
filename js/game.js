// Timer en score
let score = 0;
let timer;

function startTimer() {
    timer = setInterval(() => {
        score++;
        document.querySelector("#score").textContent = `${score}`;
    }, 1000); 
}

startTimer();

function endGame() {
    if (score > localStorage.getItem('highScore')) {
        localStorage.setItem('highScore', score); 
    }

    localStorage.setItem('lastScore', score);
    
    alert('Game over! Je score was: ' + score);
    clearInterval(timer); 
    window.location.href = 'index.html'; 
}

// meteorieten
const gameContainer = document.querySelector("#gameContainer");
const meteoriteImage = "img/ruimte_rotsblok.png";

// verschijnen en groten
function createMeteorite() {
     const meteorite = document.createElement("div");
     meteorite.classList.add("meteorite");
     meteorite.style.backgroundImage = `url(${meteoriteImage})`;

     meteorite.style.left = `${Math.random() * window.innerWidth}px`;
     meteorite.style.top = "-50px";

     const size = Math.random() * 80 + 60;
     meteorite.style.width = `${size}px`;
     meteorite.style.height = `${size}px`;

     gameContainer.appendChild(meteorite);

     animateMeteorite(meteorite);
}

// laten vallen

function animateMeteorite(meteorite) {
     let position = -50;
     const speed = Math.random() * 3 + 2;

     function move(){
          position += speed;
          meteorite.style.top = `${position}px`;

          checkCollision(meteorite); 

          if (position < window.innerHeight) {
               requestAnimationFrame(move);
          } else {
               meteorite.remove();
          }
     }

     move();
}

// willekeurige spawn

function spawnMeteorites(){
     createMeteorite();
     setTimeout(spawnMeteorites, Math.random() * 400 + 100)
} 

spawnMeteorites();

// Raket

document.onkeydown = detectKey;

function detectKey(e) {
    const rocket = document.querySelector('#rocket');
    const postLeft = rocket.offsetLeft;
    const rocketWidth = rocket.offsetWidth;
    const screenWidth = window.innerWidth; 

    e = e || window.Event;

    if (e.keyCode == '37') {
        if (postLeft > 0) {
            rocket.style.marginLeft = (postLeft - 50) + "px";
        }
    }
    else if (e.keyCode == '39') { 
        if (postLeft + rocketWidth < screenWidth) {
            rocket.style.marginLeft = (postLeft + 50) + "px";
        }
    }
}

// detectie 
function checkCollision(meteorite) {
    const rocket = document.querySelector('#rocket');

    const meteoriteRect = meteorite.getBoundingClientRect();
    const rocketRect = rocket.getBoundingClientRect();

    console.log("test 2");

    if (
        meteoriteRect.bottom > rocketRect.top && 
        meteoriteRect.top < rocketRect.bottom &&
        meteoriteRect.right > rocketRect.left && 
        meteoriteRect.left < rocketRect.right 
    ) {
        console.log("Deze Botsing gedetecteerd!");
        endGame(); 

        console.log("groter dan ", meteoriteRect.bottom, rocketRect.top); 
        console.log("kleiner dan ", meteoriteRect.top, rocketRect.bottom); 
        console.log("groter dan ", meteoriteRect.right, rocketRect.left);  
        console.log("kleiner dan ", meteoriteRect.left, rocketRect.right); 
    } else {
        console.log("GEEN botsing gedetecteerd!");
    }
}