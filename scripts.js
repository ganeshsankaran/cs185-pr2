/* Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay_text */
function showImgOverlay(which) {
    var overlay = document.getElementById("overlay");
    var img = document.getElementById("overlay-item");
    
    overlay.style.display = "block";
    img.src = which.src;

}

function hideImgOverlay() {
    var overlay = document.getElementById("overlay");

    overlay.style.display = "none";
}

function showVideoOverlay(which) {
    var overlay = document.getElementById("overlay");
    var video = document.getElementById("overlay-item");
    
    overlay.style.display = "block";
    video.src = which.src;
    video.type = which.type;
}

function hideVideoOverlay() {
    var overlay = document.getElementById("overlay");

    overlay.style.display = "none";
}

/* Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript */
function validateEmail() {
    const regex  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("email");
    var result = document.getElementById("result");

    if(regex.test(email.value.toLowerCase()) == true) {
        result.style.color = "green";
        result.innerHTML = "E-mail successfully recorded!";  
    }
    else {
        result.style.color = "red";
        result.innerHTML = "E-mail is invalid!";
    }
}

/* Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top */
var scrollBtn = document.getElementById("scroll");
var height = window.innerHeight / 4;

window.onscroll = function() { toggleScrollBtn(); }

function toggleScrollBtn() {
    if(document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        scrollBtn.style.display = "block";
    }
    else {
        scrollBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    toggleScrollBtn();
}