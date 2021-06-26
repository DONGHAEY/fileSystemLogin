"use strict";

const id = document.querySelector("#id"),
    loginBtn = document.querySelector("#next");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value
    };
    console.log(req);
}