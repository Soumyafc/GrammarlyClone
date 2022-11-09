
console.log("hello");
const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");
let userChar = 0;

const updateCounter = () => {
    userChar = charVal.value.length;
    
    totalCount.innerHTML = userChar - 9;
    remainingCount.innerHTML = 150 - userChar - 9;
};
charVal.addEventListener("keyup", () => updateCounter());

function copytext() {
    document.querySelector("textarea").select();
    document.execCommand('copy');
}