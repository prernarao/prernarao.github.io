window.onscroll = function () { scrollFunction() };

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function openMenu() {
    document.getElementById("hamburgerMenu") ? document.getElementById("hamburgerMenu").style.width = "40%" : '';
    document.getElementById("hamburgerMenu-dark") ? document.getElementById("hamburgerMenu-dark").style.width = "40%" : '';
}

function closeMenu() {
    document.getElementById("hamburgerMenu") ? document.getElementById("hamburgerMenu").style.width = "0%" : '';
    document.getElementById("hamburgerMenu-dark") ? document.getElementById("hamburgerMenu-dark").style.width = "0%" : '';
}

function scrollFunction() {
    var goToTop = document.getElementById("goToTop");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        goToTop.style.display = "block";
    } else {
        goToTop.style.display = "none";
    }
}

function goToTop() {
    document.body.scrollTo({top: 0, behavior: 'smooth'});
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
}

function hideGrid(element) {
    window.scrollTo(0, 0);
    document.getElementById("image-grid").style.display = "none";
    document.getElementById("top-div").style.display = "none";
    document.getElementById("backToGrid").style.display = "inline-block";
    document.getElementById("backToGrid2").style.display = "inline-block";
    var elementID = element.id + "-info";
    document.getElementById(elementID).style.display = "block";
}

function showGrid() {
    window.scrollTo(0, 0);
    document.getElementById("image-grid").style.display = "flex";
    document.getElementById("backToGrid").style.display = "none";
    document.getElementById("backToGrid2").style.display = "none";
    document.getElementById("top-div").style.display = "block";
    document.getElementById("html-info").style.display = "none";
    document.getElementById("kyc-info").style.display = "none";
    document.getElementById("zfp-info").style.display = "none";
    document.getElementById("ibr-info").style.display = "none";
    document.getElementById("turntables-info").style.display = "none";
    document.getElementById("ab-info").style.display = "none";
    document.getElementById("volunteer-info").style.display = "none";
}

function changeDisplayMode() {
    var modeIcon = document.getElementById("displayMode");
    var hamburgerModeIcon = document.getElementById("hamburgerDisplayMode");
    var mode = modeIcon.className;
    if (mode === "fa fa-moon-o") {
        modeIcon.className = "fa fa-sun-o";
        hamburgerModeIcon.className = "fa fa-sun-o";
        document.getElementsByClassName("name-light")[0].className = "name-dark";
        document.getElementsByTagName("body")[0].className = "body-dark";
        document.getElementsByClassName("icon")[0].className = "icon-dark";
        document.getElementsByClassName("icon")[0].className = "icon-dark";
        document.getElementsByClassName("icon")[0].className = "icon-dark";
        document.getElementsByClassName("icon")[0].className = "icon-dark";
        document.getElementsByClassName("icon")[0].className = "icon-dark";
        document.getElementsByClassName("icon")[0].className = "icon-dark";
        // document.getElementsByClassName("icon")[0].className = "icon-dark";
        document.getElementsByClassName("close")[0].className = "close-dark";
        document.getElementsByClassName("heart")[0].className = "heart-dark";
        document.getElementsByClassName("hamburger")[0].className = "hamburger-dark";
        document.getElementsByClassName("hamburgerMenu")[0].className = "hamburgerMenu-dark";
        document.getElementsByClassName("socialIcons-light")[0].className = "socialIcons-dark";
        document.getElementsByClassName("socialIcons-light")[0].className = "socialIcons-dark";
        document.getElementsByClassName("socialIcons-light")[0].className = "socialIcons-dark";
        document.getElementsByClassName("socialIcons-light")[0].className = "socialIcons-dark";
        document.getElementsByClassName("socialIcons-light")[0].className = "socialIcons-dark";
        // document.getElementsByClassName("socialIcons-light")[0].className = "socialIcons-dark";
        document.getElementsByClassName("pageLinks-light")[0].className = "pageLinks-dark";
        document.getElementsByClassName("pageLinks-light")[0].className = "pageLinks-dark";
        document.getElementsByClassName("pageLinks-light")[0].className = "pageLinks-dark";
    }
    else {
        modeIcon.className = "fa fa-moon-o";
        hamburgerModeIcon.className = "fa fa-moon-o";
        document.getElementsByClassName("name-dark")[0].className = "name-light";
        document.getElementsByTagName("body")[0].className = "body-light";
        document.getElementsByClassName("icon-dark")[0].className = "icon";
        document.getElementsByClassName("icon-dark")[0].className = "icon";
        document.getElementsByClassName("icon-dark")[0].className = "icon";
        document.getElementsByClassName("icon-dark")[0].className = "icon";
        document.getElementsByClassName("icon-dark")[0].className = "icon";
        document.getElementsByClassName("icon-dark")[0].className = "icon";
        // document.getElementsByClassName("icon-dark")[0].className = "icon";
        document.getElementsByClassName("close-dark ")[0].className = "close";
        document.getElementsByClassName("heart-dark")[0].className = "heart";
        document.getElementsByClassName("hamburger-dark")[0].className = "hamburger";
        document.getElementsByClassName("hamburgerMenu-dark")[0].className = "hamburgerMenu";
        document.getElementsByClassName("socialIcons-dark")[0].className = "socialIcons-light";
        document.getElementsByClassName("socialIcons-dark")[0].className = "socialIcons-light";
        document.getElementsByClassName("socialIcons-dark")[0].className = "socialIcons-light";
        document.getElementsByClassName("socialIcons-dark")[0].className = "socialIcons-light";
        document.getElementsByClassName("socialIcons-dark")[0].className = "socialIcons-light";
        // document.getElementsByClassName("socialIcons-dark")[0].className = "socialIcons-light";
        document.getElementsByClassName("pageLinks-dark")[0].className = "pageLinks-light";
        document.getElementsByClassName("pageLinks-dark")[0].className = "pageLinks-light";
        document.getElementsByClassName("pageLinks-dark")[0].className = "pageLinks-light";
    }
}