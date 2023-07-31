// Global
const hexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const spanColor = document.querySelector('.color');





















// Function
const btnFunction = () => {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hexes[randomNumber()];
    }
    spanColor.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}
const randomNumber = () => {
    return Math.floor(Math.random() * hexes.length);
}




















// Event listeners
btn.addEventListener('click', btnFunction)