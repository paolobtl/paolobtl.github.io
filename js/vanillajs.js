// Footer year 
document.getElementById('currentYear').innerHTML = new Date().getFullYear();



window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    // Hide blog section
    if (document.querySelector("#blog")) {
        if (document.querySelector("#blog").innerText == '') {
            document.querySelector("#blog").remove();
            document.querySelector("#top > header > nav > ul > li:nth-child(2) > a").remove()
        };
    }
});