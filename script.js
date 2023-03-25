let hamburger = document.querySelector(".hamburger");
let mobile_menu = document.querySelector(".mobile_menu");
let close_btn_wrapper = document.querySelector(".close_btn_wrapper");

hamburger.addEventListener("click", opneNav);

function opneNav(){
    mobile_menu.classList.remove("hide")
    mobile_menu.classList.add("show")
}

close_btn_wrapper.addEventListener("click", closeNav);

function closeNav(){
    mobile_menu.classList.remove("show")
    mobile_menu.classList.add("hide")
}