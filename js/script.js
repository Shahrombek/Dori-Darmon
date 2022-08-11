const openMenuModal = document.querySelector(".menu__modal");
const imgModal = document.querySelector(".img__modal");
const openMenu = (event) => {
    console.log(event);
    if (event) {
        openMenuModal.style.transform = "translateX(0)";
        imgModal.style.transform = "translateX(0)";
    }
    else {
        openMenuModal.style.transform = "translateX(100%)";
        imgModal.style.transform = "translateX(-100%)";
    }
}