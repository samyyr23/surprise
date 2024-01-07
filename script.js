document.addEventListener("DOMContentLoaded", function () {
    let message = "EU TE AMO MUITO";

    for (let i = 0; i < message.length; i++) {
        let span = document.createElement("span");
        span.innerText = message[i];
        span.style.left = i * 30 + "vw";
        span.style.animationDelay = i * 0.5 + "s";
        document.body.appendChild(span);
    }
});
