let noButton = document.getElementById('no-button');
let yesButton = document.getElementById('yes-button');
let body = document.body;

let clickCount = 0;

// Function to move the "No" button randomly
function moveNoButton() {
    let randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    let randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

// When "No" button is clicked
noButton.addEventListener('click', function () {
    clickCount++;

    if (clickCount < 3) {
        // Ask if they're sure
        let confirmation = confirm('Are you sure? Sure sure?');
        if (!confirmation) {
            // If they cancel, nothing happens
            return;
        }
    }

    // Move the "No" button randomly after a few clicks
    if (clickCount >= 3) {
        moveNoButton();
    }

    // Add an animation to make it even more interactive
    noButton.style.transition = "transform 0.4s ease-in-out";
    noButton.style.transform = "rotate(10deg)"; // Rotate when clicked
    setTimeout(() => {
        noButton.style.transform = "rotate(-10deg)";
    }, 100);
});

// When "Yes" button is clicked
yesButton.addEventListener('click', function () {
    let size = 20;
    yesButton.classList.add("grow");  // Add grow animation to the button

    // Gradually increase the size of the "Yes" button
    let interval = setInterval(function () {
        if (size >= window.innerWidth) {
            clearInterval(interval);  // Stop when it covers the screen
        }
        yesButton.style.fontSize = size + 'px';
        yesButton.style.padding = size + 'px';
        size += 10;  // Increase the size
    }, 100);  // Change the size every 100ms

    // After the "Yes" button grows, show a cute message
    setTimeout(function () {
        alert("Yay! I love you ❤️");
    }, 2000);  // Delay the message for 2 seconds
});


