// NodeList of elements having ".has-tooltip" class
const hasTooltipElements = document.querySelectorAll(".has-tooltip");
// a variable to track if there's an active tooltip element
let activeTooltip = null;

// a loop over NodeList to add eventlistener to each element
hasTooltipElements.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        const tooltipText = element.getAttribute("title");
        const tooltipElement = document.createElement("div");
        tooltipElement.classList.add("tooltip");
        tooltipElement.textContent = tooltipText;
        tooltipElement.style.top =
            element.offsetTop + element.offsetHeight + "px";
        tooltipElement.style.left = element.offsetLeft + "px";

        // If the tooltip for the clicked element is already active
        if (activeTooltip && activeTooltip === tooltipElement) {
            tooltipElement.classList.remove("tooltip_active"); // hide the tooltip
            activeTooltip = null; // reset the activeTooltip variable
        } else {
            // If the clicked element doesn't have an active tooltip

            // If there is already an active tooltip
            if (activeTooltip) {
                activeTooltip.classList.remove("tooltip_active"); // hide the active tooltip
            }
            element.parentNode.insertBefore(
                tooltipElement,
                element.nextSibling
            );
            activeTooltip = tooltipElement; // set the activeTooltip variable to the new tooltip
            tooltipElement.classList.add("tooltip_active"); // show the tooltip
        }
    });
});
