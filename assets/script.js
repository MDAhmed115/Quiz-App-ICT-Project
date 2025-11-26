window.addEventListener("load", function() {
    const welcome = document.getElementById("welcome");
    if (welcome){
        welcome.classList.add("zoom-in");
    }
});

window.addEventListener("load", function() {
    const guide = document.getElementById("guide");
    if (guide){
        guide.classList.add("zoom-in");
    }
});

window.addEventListener("scroll", function() {
    const guide = document.querySelector('.guide-page');
    const rect = guide.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        guide.classList.add('show');
    }
});

window.addEventListener("scroll", function() {
    const passcheck = document.querySelector('.pass-check-page');
    const rect = passcheck.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        passcheck.classList.add('show');
    }
});

window.addEventListener("scroll", function() {
    const passcheck = document.querySelector('.pass-gen-page');
    const rect = passcheck.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        passcheck.classList.add('show');
    }
});

window.addEventListener("scroll", function() {
    const guide = document.querySelector('.about-page');
    const rect = guide.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        guide.classList.add('show');
    }
});

window.addEventListener("scroll", function() {
    const passcheck = document.querySelector('.phishing');
    const rect = passcheck.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        passcheck.classList.add('show');
    }
});

window.addEventListener("scroll", function() {
    const passcheck = document.querySelector('.password');
    const rect = passcheck.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        passcheck.classList.add('show');
    }
});

window.addEventListener("scroll", function() {
    const passcheck = document.querySelector('.malware');
    const rect = passcheck.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        passcheck.classList.add('show');
    }
});

window.addEventListener("scroll", function() {
    const passcheck = document.querySelector('.browsing');
    const rect = passcheck.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        passcheck.classList.add('show');
    }
});

window.addEventListener("scroll", function() {
    const passcheck = document.querySelector('.safety');
    const rect = passcheck.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        passcheck.classList.add('show');
    }
});