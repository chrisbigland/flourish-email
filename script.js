import customers from "./data.js";

const cxName= document.querySelector("#cx-name");
const randomCxIndex = Math.floor(Math.random() * 10);
const randomCxName = customers[randomCxIndex].name;

cxName.innerHTML = randomCxName