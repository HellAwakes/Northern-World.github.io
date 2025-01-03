document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("Sidebar");
    const openButton = document.getElementById("open");
    const closeButton = document.getElementById("close");

    openButton.addEventListener("click", () => {
        sidebar.style.transform = "translateX(0)";
        openButton.style.display = "none";
        closeButton.style.display = "inline-block";
    });

    closeButton.addEventListener("click", () => {
        sidebar.style.transform = "translateX(-100%)";
        openButton.style.display = "inline-block";
        closeButton.style.display = "none";
    });
});