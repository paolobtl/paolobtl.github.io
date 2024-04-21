// Footer year 
document.getElementById('currentYear').innerHTML = new Date().getFullYear();

const tocElement = document.querySelector("#TableOfContents");
const tocSelector = document.querySelector('.toc-selector');
const h2Element = document.querySelector('h2.toc');

function toggleTocVisibility() {
    if (tocSelector.textContent === 'NASCONDI') {
        tocSelector.textContent = 'MOSTRA'
        tocElement.style.visibility = 'collapse'
    } else {
        tocSelector.textContent = 'NASCONDI'
        tocElement.style.visibility = 'visible'
    }
}

if(h2Element)h2Element.addEventListener('click', toggleTocVisibility);



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