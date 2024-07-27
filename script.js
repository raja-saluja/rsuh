function createConfettiPiece() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Set random position, color, and animation duration
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    
    document.getElementById('confetti-container').appendChild(confetti);
    
    // Remove confetti after animation is done
    confetti.addEventListener('animationend', () => {
        confetti.remove();
    });
}

function getRandomColor() {
    const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        setTimeout(createConfettiPiece, i * 100);
    }
}

// Start confetti effect when the page loads
window.onload = startConfetti;
