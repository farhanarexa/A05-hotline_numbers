// heart count
function heartCount() {
    let counterElement = document.getElementById("heartCounter");
    let currentCount = parseInt(counterElement.innerHTML);
    let newCount = currentCount + 1;
    counterElement.innerHTML = newCount;
}


// Get all copy buttons
let copyButtons = document.querySelectorAll(".copy-button");
copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let card = button.closest(".bg-white");
        let serviceName = card.querySelector("h3").innerText;
        let numberText = card.querySelector(".serviceNumber").innerText;
        navigator.clipboard.writeText(numberText).then(function () {
            alert(serviceName + " - " + numberText + " has been copied!");
        });
    });
});

