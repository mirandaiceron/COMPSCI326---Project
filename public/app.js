const list = document.querySelector("#resources-list");
const announcer = document.querySelector("#status-announcer");

list.addEventListener("htmx:beforeSwap", () => {
    announcer.textContent = "Resource deleted.";
    list.focus();
});

