///////////////////////////////////// Global variables //////////////////////////////////////////////////
const getElementByNamedItem = document.getElementsByTagName('div').namedItem('two');
const boldText = document.querySelector('.bear');
const buttonElem = document.querySelector("#wrapper button");
const inputElem = document.querySelector("#wrapper input");
const listItems = document.querySelectorAll('#list li');














///////////////////////////////////////////// Functions /////////////////////////////////////////////////
const changingTwosColor = () => {
    getElementByNamedItem.style.color = 'blue';
}
const boldLoremText = () => {
    boldText.style.fontWeight = 'bold';
}
const buttonElmFunction = () => {
    const oldText = inputElem.value;
    return inputElem.value = oldText === "ON" ? "OFF" : "ON";
}
const handleHover = (e) => {
    return e.target.innerText = 'ON'
};
















///////////////////////////////////////// Event listeners /////////////////////////////////////////////////
getElementByNamedItem.addEventListener('click', changingTwosColor);
boldText.addEventListener('dblclick', boldLoremText);
buttonElem.addEventListener('click', buttonElmFunction)
if(listItems.length > 1) {
    listItems.forEach(item => item.addEventListener('mouseover', handleHover));
}









