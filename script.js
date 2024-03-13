let searchBtn = document.querySelector(".fa-search");
let loginBtn = document.querySelector(".fa-user");
let loginCloseBtn = document.querySelector(".fa-times");

let searchForm = document.querySelector(".search-form");
let loginForm = document.querySelector(".login-form");


function showbar(){
    searchBtn.classList.toggle("fa-times");
    searchForm.classList.toggle("active");
}
function showform(){   
    loginForm.classList.add("active");
}
function hideform(){
    loginForm.classList.remove("active");
}

searchBtn.addEventListener('click', showbar);
loginBtn.addEventListener('click', showform);
loginCloseBtn.addEventListener('click', hideform);