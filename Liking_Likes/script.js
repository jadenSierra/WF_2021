let currentVal = [9,12,9]
let currentElTop = document.querySelector("#topUpdate > div > p") 
let currentElMid = document.querySelector("#middleUpdate > div >p")  
let currentElBot = document.querySelector("#bottomUpdate > div >p")  
console.log(currentVal);

function incrementTop() {   
    currentVal[0]++;
    currentElTop.innerText = `${currentVal[0]} like(s)`;
}

function incrementMid() {   
    currentVal[1]++;
    currentElMid.innerText = `${currentVal[1]} like(s)`;
}

function incrementBot() {   
    currentVal[2]++;
    currentElBot.innerText = `${currentVal[2]} like(s)`;
}