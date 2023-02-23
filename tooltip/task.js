// NodeList of elements having ".has-tooltip" class
const hasTooltipElements = document.querySelectorAll(".has-tooltip");
// a variable to track if there's an active tooltip element
let activeTooltip = null;

// a loop over NodeList to add eventlistener to each element
hasTooltipElements.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        // getting the text for the tip from the title of clicked element
        const tooltipText = element.getAttribute("title");
        // creating new div
        const tooltipElement = document.createElement("div");
        // adding "tooltip" class to div element
        tooltipElement.classList.add("tooltip");
        // inserting text to div element
        tooltipElement.textContent = tooltipText;
        // addit style top and left to position the element
        tooltipElement.style.top =
            element.offsetTop + element.offsetHeight + "px";
        tooltipElement.style.left = element.offsetLeft + "px";
        // checking if there's already a new div with ".tooltip_active" class
        // if there's one, we remove "tooltip_active" to make only one tip to be shown at a time
        if (activeTooltip) {
            activeTooltip.classList.remove("tooltip_active");
        }
        // inserting the created div
        element.parentNode.insertBefore(tooltipElement, element.nextSibling);
        // setting the varialble we designed at the top to be equal
        // to the element we created and inserted
        activeTooltip = tooltipElement;
        // adding "tooltip_active" class as it 'activates' the tip
        tooltipElement.classList.add("tooltip_active");
    });
});
