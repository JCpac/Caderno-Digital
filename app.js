let cssClasses = {
    "h2-toggle": "section-closed"
};

let config = {
    "h2-initialy-closed": true
}

function setupSectionHeaders(h2List) {
    h2List.forEach(h2 => {
        h2.addEventListener("click", event => { h2.classList.toggle(cssClasses["h2-toggle"]); });

        let h2Space = document.createElement("span");
        h2Space.innerHTML = "&emsp;";
        h2.prepend(h2Space);

        h2.classList.toggle(cssClasses["h2-toggle"], config["h2-initialy-closed"]);
    });
}

function setupMain() {
    let h2List = document.querySelectorAll("section > h2");
    setupSectionHeaders(h2List);
}

(async () => {
    document.addEventListener("DOMContentLoaded", event => { setupMain(); });

})();