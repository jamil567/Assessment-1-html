let lives = 3;
let score = 0;
const colorOptions = [];
const rgbDisplay = document.getElementById('rgb-value');
const colorOptionsContainer = document.getElementById('color-options');
const resultDisplay = document.getElementById('result');
const livesDisplay = document.getElementById('lives');
const replayButton = document.getElementById('replay-button');

function startGame() {
    lives = 3;
    score = 0;
    replayButton.classList.add('hidden');
    updateLivesDisplay();
    nextRound();
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateColorOptions(correctColor) {
    colorOptions.length = 0;
    colorOptions.push(correctColor);

    while (colorOptions.length < 3) {
        const randomColor = getRandomColor();
        if (!colorOptions.includes(randomColor)) {
            colorOptions.push(randomColor);
        }
    }

    colorOptions.sort(() => Math.random() - 0.5);
}

function updateLivesDisplay() {
    livesDisplay.textContent = `Lives: ${lives}`;
}

function handleGuess(selectedColor, correctColor) {
    if (selectedColor === correctColor) {
        score++;
        resultDisplay.textContent = "Correct! 🎉";
    } else {
        lives--;
        resultDisplay.textContent = "Incorrect! 😢";
        updateLivesDisplay();
    }

    if (lives === 0) {
        endGame();
    } else {
        nextRound();
    }
}

function endGame() {
    rgbDisplay.textContent = "";
    colorOptionsContainer.innerHTML = "";
    resultDisplay.textContent = `Game Over! Your score: ${score}`;
    livesDisplay.textContent = "";
    replayButton.classList.remove('hidden');
}

function nextRound() {
    const correctColor = getRandomColor();
    rgbDisplay.textContent = `Guess the color: ${correctColor}`;
    generateColorOptions(correctColor);

    colorOptionsContainer.innerHTML = "";

    colorOptions.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.classList.add('color-option');
        colorOption.style.backgroundColor = color;
        colorOption.addEventListener('click', () => handleGuess(color, correctColor));
        colorOptionsContainer.appendChild(colorOption);
    });
}

replayButton.addEventListener('click', startGame);
startGame();