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

function changeDisplayMode() {
    var modeIcon = document.getElementById("displayMode");
    var hamburgerModeIcon = document.getElementById("hamburgerDisplayMode");
    var mode = modeIcon.className;
    if (mode === "fa fa-moon-o") {
        modeIcon.className = "fa fa-sun-o";
        hamburgerModeIcon.className = "fa fa-sun-o";
        document.getElementsByClassName("name-light")[0].className = "name-dark";
        document.getElementsByTagName("body")[0].className = "body-dark";
        document.getElementsByTagName("p")[0].className = "p-dark";
        document.getElementsByTagName("h2")[0].className = "hello-dark";
        document.getElementsByClassName("comic")[0].src = "images/comic-dark.png";
        document.getElementsByClassName("sitara")[0].className = "sitara-dark";
        document.getElementsByClassName("gehc")[0].className = "gehc-dark";
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
    }
    else {
        modeIcon.className = "fa fa-moon-o";
        hamburgerModeIcon.className = "fa fa-moon-o";
        document.getElementsByClassName("name-dark")[0].className = "name-light";
        document.getElementsByTagName("body")[0].className = "body-light";
        document.getElementsByTagName("p")[0].className = "p-light";
        document.getElementsByTagName("h2")[0].className = "hello-light";
        document.getElementsByClassName("comic")[0].src = "images/comic-nobg.png";
        document.getElementsByClassName("sitara-dark")[0].className = "sitara";
        document.getElementsByClassName("gehc-dark")[0].className = "gehc";
        document.getElementsByClassName("icon-dark")[0].className = "icon";
        document.getElementsByClassName("icon-dark")[0].className = "icon";
        document.getElementsByClassName("icon-dark")[0].className = "icon";
        document.getElementsByClassName("icon-dark")[0].className = "icon";
        document.getElementsByClassName("icon-dark")[0].className = "icon";
        // document.getElementsByClassName("icon-dark")[0].className = "icon";
        document.getElementsByClassName("close-dark")[0].className = "close";
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
    }
}