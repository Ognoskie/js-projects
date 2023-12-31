///////////////////////////////////// Global variables //////////////////////////////////////////////////
const getElementByNamedItem = document.getElementsByTagName('div').namedItem('two');
const boldText = document.querySelector('.bear');
const buttonElem = document.querySelector("#wrapper button");
const inputElem = document.querySelector("#wrapper input");
const listItems = document.querySelectorAll('#list li');
const button = document.getElementById('button');
const input = document.getElementById('input');
const element = document.getElementById('element');
const elementTwo = document.querySelector('#element-two');
const button = document.querySelector('#btn');











///////////////////////////////////////////// Functions /////////////////////////////////////////////////
const changingTwosColor = () => {
    getElementByNamedItem.style.color = 'blue';
};
const boldLoremText = () => {
    boldText.style.fontWeight = 'bold';
};
const buttonElmFunction = () => {
    const oldText = inputElem.value;
    return inputElem.value = oldText === "ON" ? "OFF" : "ON";
};
const handleHover = (e) => {
    return e.target.innerText = 'ON'
};
const handleClick = () => {
    input.value = 'Hello World';
};
const changeText = () => {
    element.innerText = 'Thanks!';
};
const toggleColor = (isEntering) => {
    elementTwo.style.background = isEntering ? 'orange' : 'black';
};
const removeRedCircle = () => {

};













///////////////////////////////////////// Event listeners /////////////////////////////////////////////////
getElementByNamedItem.addEventListener('click', changingTwosColor);
boldText.addEventListener('dblclick', boldLoremText);
buttonElem.addEventListener('click', buttonElmFunction);
if(listItems.length > 1) {
    listItems.forEach(item => item.addEventListener('mouseover', handleHover));
};
button.addEventListener('click', handleClick);
element.addEventListener("mouseover", changeText);
elementTwo.addEventListener('mouseover', () => {
    toggleColor(true)
});
elementTwo.addEventListener('mouseout', () => {
    toggleColor(false)
});
btn.addEventListener('click', removeRedCircle);






