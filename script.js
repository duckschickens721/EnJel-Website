document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("showLoveLetter");
    const loveLetter = document.querySelector(".love-letter");

    loveLetter.style.display = "none"; // Ensure it is hidden initially

    button.addEventListener("click", function () {
        if (loveLetter.style.display === "none" || loveLetter.style.display === "") {
            loveLetter.style.display = "block";
        } else {
            loveLetter.style.display = "none";
        }
    });
});
