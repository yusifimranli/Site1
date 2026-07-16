let menu = document.getElementById('menu') 
const links = document.querySelectorAll("#menu a, .desktop-container a");
const header = document.getElementById("header");

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

