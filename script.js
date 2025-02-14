<script>
    let noButton = document.getElementById('no-button');
    let yesButton = document.getElementById('yes-button');
    let body = document.body;

    let clickCount = 0;

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

        // Move the "No" button randomly
        if (clickCount >= 3) {
            let randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
            let randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

            noButton.style.left = randomX + 'px';
            noButton.style.top = randomY + 'px';
        }
    });

    // When "Yes" button is clicked
    yesButton.addEventListener('click', function () {
        let size = 20;
        let interval = setInterval(function () {
            if (size >= window.innerWidth) {
                clearInterval(interval);  // Stop when it covers the screen
            }
            yesButton.style.fontSize = size + 'px';
            yesButton.style.padding = size + 'px';
            size += 10;  // Increase the size
        }, 100);  // Change the size every 100ms
    });
</script>
