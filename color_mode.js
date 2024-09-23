// Function to change the color of the website
function changeMode() {
    // Storing the elements that will change color, into variables
    let body = document.body;
    let navBar = document.getElementsByClassName('myNavBar')[0];
    let cards = document.getElementsByClassName('card');

    // Storing the colors in variables
    let beige = 'rgb(245, 235, 224)';
    let brown = 'rgb(224, 209, 193)';
    let darkBrown = 'rgb(117, 88, 65)';
    let lightBlue = 'rgb(213, 221, 227)';
    let blue = 'rgb(56, 74, 110)';
    let navy = 'rgb(27, 38, 59)';

    // Check current latest color with local storage
    let mode = localStorage.getItem('colorMode');

    // Conditional to make the color switch
    // If the current color mode is dark, then change to light, else, the other way around
    if (mode == 'dark') {
        body.style.color = darkBrown
        body.style.backgroundColor = beige;
        navBar.style.backgroundColor = brown;
        // Iterating through the blog entries to capture them all
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = brown;
        };
        // Saving the light mode in local storage
        localStorage.setItem('colorMode', 'light');
    } else {
        body.style.color = lightBlue;
        body.style.backgroundColor = navy;
        navBar.style.backgroundColor = blue;
        // Iterating through the blog entries to capture them all
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = blue;
        };
        // Saving the dark mode in local storage
        localStorage.setItem('colorMode', 'dark');
    };
};

// Function to check the latest mode
function latestMode() {
    // Storing the elements that will change color, into variables
    let body = document.body;
    let navBar = document.getElementsByClassName('myNavBar')[0];
    let cards = document.getElementsByClassName('card');

    // Storing the colors in variables
    let beige = 'rgb(245, 235, 224)';
    let brown = 'rgb(224, 209, 193)';
    let darkBrown = 'rgb(117, 88, 65)';
    let lightBlue = 'rgb(213, 221, 227)';
    let blue = 'rgb(56, 74, 110)';
    let navy = 'rgb(27, 38, 59)';

    // Check current latest color with local storage
    let mode = localStorage.getItem('colorMode');

    // Conditional to apply the respective colors to each dark or light modes
    if (mode == 'dark') {
        body.style.color = lightBlue;
        body.style.backgroundColor = navy;
        navBar.style.backgroundColor = blue;
        // Iterating through the blog entries to capture them all
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = blue;
        };
    } else {
        body.style.color = darkBrown
        body.style.backgroundColor = beige;
        navBar.style.backgroundColor = brown;
        // Iterating through the blog entries to capture them all
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = brown;
        };
    };
};

// This is for the page to apply the saved mode
window.onload = latestMode;