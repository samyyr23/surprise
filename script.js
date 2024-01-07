document.addEventListener("DOMContentLoaded", function () {
    let interval = setInterval(addRandomNumber, 50);
    let message = "EU TE AMO MUITO";
    let currentIndex = 0;

    function addRandomNumber() {
        let randomNumber = Math.floor(Math.random() * 10);
        let span = document.createElement("span");
        span.style.color = "lime";
        span.style.position = "absolute";
        span.style.left = Math.random() * 100 + "vw";
        span.style.top = Math.random() * 100 + "vh";
        span.innerText = randomNumber;

        document.body.appendChild(span);

        if (currentIndex < message.length) {
            span.innerText = message[currentIndex];
            currentIndex++;
        } else {
            document.body.removeChild(span);
        }
    }
});


