const subnav = document.querySelector('.subnav');
const dropdown = document.querySelector('.dropdown');
const social = document.querySelector('#social');
const footerDate = document.querySelector("body > footer > span:nth-child(2)");
const themeSwitcher = document.querySelector('.theme-switcher');
const themeSwitcherIcon = document.querySelector('.theme-switcher-icon');
const date = new Date();
footerDate.textContent = date.getFullYear();
const toggleDropdown = () => {
    if (!dropdown.classList.contains('dropdown-open')) {
        subnav.style.height = 'fit-content';
        subnav.style.opacity = '1';
        dropdown.classList.add('dropdown-open');
        social.textContent = 'Social-';
    } else {
        subnav.style.height = '0';
        subnav.style.opacity = '0';
        dropdown.classList.remove('dropdown-open');
        social.textContent = 'Social+';
    }
};

const toggleTheme = () => {
    if (!themeSwitcher.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = 'var(--dark-bg)';
        document.body.style.color = 'var(--dark-text)'
        themeSwitcher.classList.add('dark-mode');
        themeSwitcherIcon.style.filter = 'invert(1)';
    } else {
        document.body.style.backgroundColor = 'var(--light-bg)';
        document.body.style.color = 'var(--light-text)'
        themeSwitcher.classList.remove('dark-mode');
        themeSwitcherIcon.style.filter = 'invert(0)';
    }
}
dropdown.addEventListener('click', toggleDropdown);
document.querySelectorAll('a:not([href*="#"])').forEach(anchor => {
    if (!anchor.href == document.location.href) {
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noopener noreferrer');
    }
});

themeSwitcherIcon.addEventListener('click', toggleTheme)

// Set subnav closed and social text to 'Social+'
social.textContent = 'Social+';