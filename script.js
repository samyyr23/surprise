document.addEventListener("DOMContentLoaded", function () {
    let message = "EU TE AMO MUITO";

    for (let i = 0; i < message.length; i++) {
        let span = document.createElement("span");
        span.innerText = message[i];
        span.style.left = Math.random() * 100 + "vw";
        span.style.animationDelay = Math.random() + "s";
        document.body.appendChild(span);
    }
});
