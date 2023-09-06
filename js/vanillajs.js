// Footer year 
document.getElementById('currentYear').innerHTML = new Date().getFullYear();

// Set up variables for the theme modes
const lightTheme = {
    '--white': '#fff',
    '--white2': '#eee',
    '--dark': '#333',
    '--dark2': '#222'
};

const darkTheme = {
    '--white': '#333',
    '--white2': '#222',
    '--dark': '#fff',
    '--dark2': '#eee'
};

// Check theme mode on page load
const onLoad = () => {
    console.log("DOM fully loaded and parsed");
    // Hide blog section
    if (document.querySelector("#blog")) {
        if (document.querySelector("#blog").innerText == '') {
            document.querySelector("#blog").remove();
            document.querySelector("#top > header > nav > ul > li:nth-child(2) > a").remove()
        };
    };
};

// Attach event listeners
window.addEventListener('DOMContentLoaded', onLoad);