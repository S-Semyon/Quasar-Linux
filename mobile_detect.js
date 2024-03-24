function mobileDetect() {
    var mainElement = document.querySelector("main");
    var navElement = document.getElementById("nav");

    if (!mainElement || !navElement) {
        return;
    }

    if (window.innerWidth < 900) {
            mainElement.classList.add("mobile");
            navElement.classList.add("mobile");
    } else {
        mainElement.classList.remove("mobile");
        navElement.classList.remove("mobile");
    }
}

mobileDetect();
window.addEventListener("resize", mobileDetect);