document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll(".letter");

    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.3}s`;
    });
});

