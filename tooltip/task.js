const tooltips = document.querySelectorAll(".has-tooltip");

tooltips.forEach((tooltip) => {
    tooltip.addEventListener("click", (e) => {
        e.preventDefault();

        const tooltipText = tooltip.getAttribute("title");
        const tooltipActive = document.querySelector(".tooltip_active");

        if (tooltipActive && tooltipActive.textContent === tooltipText) {
            tooltipActive.classList.remove("tooltip_active");
            return;
        }

        if (tooltipActive) {
            tooltipActive.classList.remove("tooltip_active");
        }

        const tooltipDiv = document.createElement("div");
        tooltipDiv.classList.add("tooltip", "tooltip_active");
        tooltipDiv.textContent = tooltipText;
        tooltip.parentNode.insertBefore(tooltipDiv, tooltip.nextSibling);
    });
});
