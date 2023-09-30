

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
