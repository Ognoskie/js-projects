///////////////////////////////////// Global variables //////////////////////////////////////////////////
const getElementByNamedItem = document.getElementsByTagName('div').namedItem('two');
const boldText = document.querySelector('.bear');
const buttonElem = document.querySelector("#wrapper button");
const inputElem = document.querySelector("#wrapper input");















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

















///////////////////////////////////////// Event listeners /////////////////////////////////////////////////
getElementByNamedItem.addEventListener('click', changingTwosColor);
boldText.addEventListener('dblclick', boldLoremText);
buttonElem.addEventListener('click', buttonElmFunction)







