let bal = 0;

const withdrawbtn = document.getElementById("withdraw");
const depositbtn = document.getElementById("deposit");
//const transferbtn = document.getElementById("transfer");

const balancetxt = document.getElementById("balance");

//transferbtn.onclick = transfer();

function withdraw(){
    bal--;
    balancetxt.innerHTML = bal.toString() + " G";
}

function deposit(){
    bal++;
    balancetxt.innerHTML = bal.toString() + " G";
}

function transfer(){

}

function createNewUser(){

}

function deleteUser(){

}

function updateUser(){

}