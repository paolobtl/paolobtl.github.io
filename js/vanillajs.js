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

// Define a function to set the theme
const setTheme = (themeMode) => {
    const theme = themeMode === 'light' ? lightTheme : darkTheme;
    Object.entries(theme).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
    });
    window.localStorage.setItem('themeMode', themeMode);
};

// Toggle theme mode on button click
const toggleThemeMode = () => {
    const themeMode = theme() === 'dark' ? 'light' : 'dark';
    setTheme(themeMode);
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
    const currentTheme = theme();
    if (currentTheme) {
        setTheme(currentTheme);
    } else {
        setTheme('light');
    }
};

// Define the theme function to get the current theme mode
const theme = () => window.localStorage.getItem('themeMode');

// Attach event listeners
const themeModeSelektor = document.querySelector('#top i.fa-sun');
themeModeSelektor.addEventListener('click', toggleThemeMode);
window.addEventListener('DOMContentLoaded', onLoad);