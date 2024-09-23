// Function to create new blog entries
function onButtonClick() {
    // Capturing the input from the user in a variable that's inside of blogPost object
    let blogPost = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        entry: document.getElementById('entry').value
    };

    // Storing my grid of divs in a variable called grid
    let grid = document.getElementById("grid");
    // Creating a new div for each new "card" or blog post and storing it in a variable
    let newCard = document.createElement("div");
    // Adding the class name "card" to this new post for it to have the same styles as the others
    newCard.classList.add("card");
    // Appending this new post to my grid
    grid.appendChild(newCard);
    
    // Creating a new h2 for the title as this is the format that I'm using for titles
    let newH2 = document.createElement("h2");
    // Assigning the title from the user input to my new h2
    newH2.innerHTML = blogPost.title;
    // Appending this title to my card/div that will be appended to my grid
    newCard.appendChild(newH2);
    
    // Creating a new h3 for the author as this is the format that I'm using for authors
    let newH3 = document.createElement("h3");
    // Assigning the author from the user input to my new h3
    newH3.innerHTML = blogPost.author;
    // Appending this author to my card/div that will be appended to my grid
    newCard.appendChild(newH3);
    
    // Creating a new paragraph for the comment/entry as this is the format that I'm using for comments
    let newP = document.createElement("p");
    // Assigning the comment from the user input to my new p
    newP.innerHTML = blogPost.entry;
    // Appending this comment to my card/div that will be appended to my grid
    newCard.appendChild(newP);
};