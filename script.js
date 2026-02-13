// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
        // Start the music on the first click
        var music = document.getElementById('bg-music');
        music.play();
        
    } else if (option === 'no') {
        // 1. Change text and grow the "Yes" button
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; 
        yesButton.style.fontSize = newSize + 'px';

        // 2. Teleport the "No" button to a random spot
        var noButton = document.getElementById('no-button');
        
        // Calculate random coordinates based on the window size
        var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        var y = Math.random() * (window.innerHeight - noButton.offsetHeight);

        // Apply the new position
        noButton.style.position = 'absolute'; // Switch to absolute for the jump
        noButton.style.left = x + 'px';
        noButton.style.top = y + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the dog.jpg initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element
    var catImage = new Image();
    // Set the source (file path) - YOU WROTE dog.jpg HERE, MAKE SURE FILE IS NAMED dog.jpg
    catImage.src = 'dog.jpg'; 
    // Set alternative text for the image
    catImage.alt = 'Cat';
    // When the image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    // 1. Clear everything and hide the text/buttons from Page 1
    document.getElementById('image-container').innerHTML = '';
    document.getElementById('options').style.display = 'none';
    document.getElementById('question').style.display = 'none';
    document.getElementById('pre-message').style.display = 'none'; // Hides "Hey gorgeous"
    
    // 2. Show the success text
    document.getElementById('success-message').style.display = 'block';

    // 3. Create the 3 Images
    var container = document.getElementById('image-container');

    // --- Left Image ---
    var leftImg = new Image();
    leftImg.src = 'left-pic.jpg';  // MAKE SURE YOU HAVE A FILE NAMED THIS
    leftImg.className = 'side-img'; // Uses the special size from CSS
    leftImg.alt = 'Left Memory';

    // --- Center Image (GIF) ---
    var centerImg = new Image();
    centerImg.src = 'cat-heart.gif';
    centerImg.alt = 'Celebrating';

    // --- Right Image ---
    var rightImg = new Image();
    rightImg.src = 'right-pic.jpg'; // MAKE SURE YOU HAVE A FILE NAMED THIS
    rightImg.className = 'side-img';
    rightImg.alt = 'Right Memory';

    // 4. Add them to the row (Order matters!)
    container.appendChild(leftImg);
    container.appendChild(centerImg);
    container.appendChild(rightImg);
}

// Display the dog.jpg initially
displayCat();


