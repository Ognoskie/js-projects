// Globals

const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById('btn');
const spanColor = document.querySelector('.color');








// Functions
const btnFunction = () => {
    const randomNum = randomNumber()
    spanColor.textContent = colors[randomNum];
    document.body.style.backgroundColor = colors[randomNum];
}
const randomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}












// Event listeners
btn.addEventListener('click', btnFunction)