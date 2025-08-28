function heartCount() {
    let counterElement = document.getElementById("heartCounter");
    let currentCount = parseInt(counterElement.innerHTML);
    let newCount = currentCount + 1;
    counterElement.innerHTML = newCount;
  }
