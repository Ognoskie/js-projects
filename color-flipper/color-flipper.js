// Globals

const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById('btn');
const spanColor = document.querySelector('.color');








// Functions
const btnFunction = () => {
    const randomNum = randomNumber();
    console.log(randomNum)
    for (let i = 0; i < colors.length; i++) {
        document.body.style.backgroundColor = colors[i].length
    }
}
const randomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}














// Event listeners
btn.addEventListener('click', btnFunction)