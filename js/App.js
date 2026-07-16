let menu = document.getElementById('menu') 
const links = document.querySelectorAll("#menu a, .desktop-container a,#hero a");
const header = document.getElementById("header");
const form = document.querySelector("#form");

function showmenu() {
   menu.style.left === '-100%' ?   menu.style.left = '0' :  menu.style.left = '-100%'
}

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


window.addEventListener("scroll", () => {
    window.scrollY > 100 ? header.classList.add("active"):
                          header.classList.remove("active");
});

form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(name === ""){
        document.querySelector("#nameError").innerHTML = "Ad boşdur";
    }
    else{
        document.querySelector("#nameError").innerHTML = "";
    }


    if(email === ""){
        document.querySelector("#emailError").innerHTML = "Email boşdur";
    }
    else if(!emailCheck.test(email)){
        document.querySelector("#emailError").innerHTML = "Email düzgün deyil";
    }
    else{
        document.querySelector("#emailError").innerHTML = "";
    }


    if(message === ""){
        document.querySelector("#messageError").innerHTML = "Mesaj boşdur";
    }
    else{
        document.querySelector("#messageError").innerHTML = "";
    }

    if(name !== "" && emailCheck.test(email) && message !== ""){
    alert("Mesaj uğurla göndərildi");
    form.reset();
    }

});
