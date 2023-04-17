class Footer extends HTMLElement {
    connectedCallback() {
        const currentYear = new Date().getFullYear();
        this.innerHTML = `
        <!-- Scroll top button -->
        <a href="#home" class="top">
            <img src="/assets/img/arrow-scroll-to-top.png" alt="">
        </a>
        <footer>
            <div class="footer">
                <p>
                    &copy; ${currentYear} <span>Paolo Bietolini</span> - Tutti i diritti riservati
                </p>
            </div>
        </footer>`;
    }
}

customElements.define('footer-template', Footer);
