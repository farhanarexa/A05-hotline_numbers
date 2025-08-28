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

// Get all call buttons
let callButtons = document.querySelectorAll(".call-button");
callButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        // checking if the user has enough coins
        let coinCounter = document.getElementById("coinCounter").innerHTML;
        let coinCount = parseInt(coinCounter);
        if (coinCount < 20) {
            alert("You don't have enough coins");
            return;
        }
        coinCount -= 20;
        document.getElementById("coinCounter").innerHTML = coinCount;

        // successful call alert
        let card = button.closest(".bg-white");
        let serviceName = card.querySelector("h3").innerText;
        let numberText = card.querySelector(".serviceNumber").innerText;
        alert("Calling " + serviceName + " - " + numberText);
    });
});
