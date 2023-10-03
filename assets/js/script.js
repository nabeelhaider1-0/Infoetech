

document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".text");
    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach(function (button, index) {
        let isExpanded = false; // Change the initial state to false
        const originalText = textElements[index].textContent;
        const truncatedText = originalText.substring(0, 200) + "...";

        textElements[index].textContent = truncatedText; // Show truncated text initially

        button.addEventListener("click", function () {
            if (isExpanded) {
                textElements[index].textContent = truncatedText; // Revert to truncated text
                button.textContent = "Show more";
                isExpanded = false;
            } else {
                textElements[index].textContent = originalText; // Show full text
                button.textContent = "Show less";
                isExpanded = true;
            }
        });
    });
});



// Create variables for each button's state
let isToggled1 = false;
let isToggled2 = false;
let isToggled3 = false;
let isToggled4 = false;

// Add event listeners to each button
document.getElementById('toggle-button-1').addEventListener('click', function () {
  toggleImage('toggle-button-1', 'assets/images/plus.svg', 'assets/images/minus.svg', isToggled1);
  isToggled1 = !isToggled1;
});

document.getElementById('toggle-button-2').addEventListener('click', function () {
  toggleImage('toggle-button-2', 'assets/images/plus.svg', 'assets/images/minus.svg', isToggled2);
  isToggled2 = !isToggled2;
});

document.getElementById('toggle-button-3').addEventListener('click', function () {
  toggleImage('toggle-button-3', 'assets/images/plus.svg', 'assets/images/minus.svg', isToggled3);
  isToggled3 = !isToggled3;
});

document.getElementById('toggle-button-4').addEventListener('click', function () {
  toggleImage('toggle-button-4', 'assets/images/plus.svg', 'assets/images/minus.svg', isToggled4);
  isToggled4 = !isToggled4;
});

// Function to toggle image source
function toggleImage(buttonId, originalSrc, newSrc, isToggled) {
  const button = document.getElementById(buttonId);
  if (isToggled) {
    button.src = originalSrc;
  } else {
    button.src = newSrc;
  }
}