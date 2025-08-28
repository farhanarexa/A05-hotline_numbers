let copyButtons = document.querySelectorAll(".copy-button"); // Get all copy buttons
let callButtons = document.querySelectorAll(".call-button"); // Get all call buttons
let clearButtons = document.getElementById("clearBtn"); // Get the clear button

// heart count
function heartCount() {
    let counterElement = document.getElementById("heartCounter");
    let currentCount = parseInt(counterElement.innerHTML);
    let newCount = currentCount + 1;
    counterElement.innerHTML = newCount;
}


// copy count
copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let counterElement = document.getElementById("copyCounter");
        let currentCount = parseInt(counterElement.innerHTML);
        let newCount = currentCount + 1;
        counterElement.innerHTML = newCount;


    });
});


// copy alert
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


// call alert
callButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        // checking if the user has enough coins
        let coinCounter = document.getElementById("coinCounter").innerHTML;
        let coinCount = parseInt(coinCounter);
        if (coinCount < 20) {
            alert("You need at least 20 coins to make a call!");
            return;
        }
        coinCount -= 20;
        document.getElementById("coinCounter").innerHTML = coinCount;

        // successful call alert
        let card = button.closest(".bg-white");
        let serviceName = card.querySelector("h3").innerText;
        let numberText = card.querySelector(".serviceNumber").innerText;
        alert("Calling " + serviceName + " - " + numberText);

        // adding call history
        document.getElementById("callHistoryList").innerHTML += `
        <li class="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="font-medium text-gray-800">${serviceName}</p>
                            <p class="text-xs text-gray-500">${numberText}</p>
                        </div>
                        <span class="text-xs text-gray-500">${new Date().toLocaleTimeString()}</span>
                    </div>
                </li>` 
    });
});


// clear call history
clearButtons.addEventListener("click", function () {
    document.getElementById("callHistoryList").innerHTML = "";
});
