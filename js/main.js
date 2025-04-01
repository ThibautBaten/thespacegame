let button = document.querySelector('.button');
let flikker = true; 

setInterval(function() {
    if (flikker) {
        button.style.color = 'red'; 
    } else {
        button.style.color = 'white'; 
    }
    flikker = !flikker; 
}, 500); 

const lastScore = localStorage.getItem('lastScore') || 0;
        const highScore = localStorage.getItem('highScore') || 0;

        document.getElementById('recentScore').textContent = lastScore;
        document.getElementById('highScore').textContent = highScore;