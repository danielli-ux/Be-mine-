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

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element
    var catHeartImage = new Image();
    // Set the source (file path)
    catHeartImage.src = 'cat-heart.gif'; 
    // Set alternative text
    catHeartImage.alt = 'Cat Heart';
    // When the image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the dog.jpg initially
displayCat();
