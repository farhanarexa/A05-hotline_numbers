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
let callButtons = document.querySelectorAll(".call-button"); // selecting the green call buttons
callButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let card = button.closest(".bg-white"); // find the parent card
        let serviceName = card.querySelector("h3").innerText; // get the service name
        let numberText = card.querySelector(".serviceNumber").innerText; // get the number
        alert("Calling " + serviceName + " - " + numberText);
    });
});
