let overlay = document.querySelector("#overlay");
let hamburger = document.querySelector("#hamburger");
let nav_list = document.querySelector("#nav-list");

hamburger.addEventListener("click", () => {
    if (nav_list.style.top === "5rem") {
        nav_list.style.top = "-15rem";
    } else {
        nav_list.style.top = "5rem";
    }
});

setTimeout(() => {
    overlay.style.display = "block";
}, 5000);

function closeOverlay(e) {
    overlay.style.display = "none";
}