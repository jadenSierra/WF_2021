let loggedIn = true;

function login(element){

    if(loggedIn){
        element.innerText = "Logout";
        loggedIn = false;
    } else {
        element.innerText = "Login";
        loggedIn = true;
    }
};

function likeBtn() {
    alert("Ninja was liked");
}

function removeDefinitionBTN(element){
    element.remove();
}