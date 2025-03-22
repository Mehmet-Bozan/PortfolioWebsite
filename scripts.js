window.onload = function() {
    console.log("Carlos is online!");
    let navs = document.querySelectorAll("nav a");
    for (let nav of navs) {
        nav.addEventListener("click", function(e) {
            e.preventDefault();
            let ref = document.querySelector(this.getAttribute("href"));
            ref.scrollIntoView({ behavior: "smooth" });
        });
    }
};