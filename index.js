// Loop through all elements with the class "drum" on the page
for (var index = 0; index < document.querySelectorAll(".drum").length; index++) {
    // Add click event listener to each element with class "drum"
    document.querySelectorAll(".drum")[index].addEventListener("click", function(){
        // Get the inner HTML content of the clicked element
        var ButtonContent = this.innerHTML;
        // Call the makeSound function with the inner HTML content as argument
        makeSound(ButtonContent);
        // Call the buttonAnimation function with the inner HTML content as argument
        buttonAnimation(ButtonContent);
    });

    // Add keydown event listener to the entire document
    document.addEventListener("keydown", function(event){
        // Get the key that was pressed
        var pressedKey = event.key;
        // Call the makeSound function with the pressed key as argument
        makeSound(pressedKey);
        // Call the buttonAnimation function with the pressed key as argument
        buttonAnimation(pressedKey);
    });
}

// Function to play sound based on key or button clicked
function makeSound(key){   
    // Switch statement to determine which sound to play based on key/button clicked
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(key);
    }
}
// Function to add animation to button when clicked
function buttonAnimation(currentKey){
    // Select the button with the class of the current key
    var activeButton = document.querySelector("." + currentKey);
    // Add the class "pressed" to the button
    activeButton.classList.add("pressed");
    // Remove the class "pressed" from the button after 100ms
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

