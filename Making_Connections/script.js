let toddRequest = document.querySelector("#todd")
let philRequest = document.querySelector("#phil")
let requests = [toddRequest,philRequest]

let newRequestsAmount = document.querySelector("#requests");
let currentRequestsAmount = 2;

let currentConnectionsAmount = 500;
let newConnectionsAmount = document.querySelector("#connections")


let userName = document.querySelector("#userName")

function deny(index) {
    currentRequestsAmount--;
    newRequestsAmount.innerText = currentRequestsAmount;
    requests[index].remove();
}

function accept(index) {
    currentRequestsAmount--;
    newRequestsAmount.innerText = currentRequestsAmount;
    currentConnectionsAmount++;
    newConnectionsAmount.innerText = currentConnectionsAmount;
    requests[index].remove();
}

function changeName() {
    userName.innerText = "Mary Jane";
}