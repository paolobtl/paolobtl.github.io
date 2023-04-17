class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="theme-selector">
            <i class="fa-solid fa-sun"></i>
        </div>
        <div class="user">
            <a href="/"><img src="/assets/img/portrait.jpg" alt=""></a>
            <h3 class="name">paolo bietolini</h3>
            <p class="post">analytics developer</p>
        </div>
        <nav class="navbar">
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#blog">blog</a></li>
                <li><a href="#about">chi sono</a></li>
                <li><a href="#experience">esperienza</a></li>
                <li><a href="#contact">contatti</a></li>
            </ul>
            <a href="https://github.com/paolobtl" target="_blank" rel="noreferrer noopener nofollow">
                <i class="fas fa-brands fa-github"></i>
            </a>
            <a href="https://mastodon.uno/@plbtl" target="_blank" rel="noreferrer noopener nofollow">
                <i class="fas fa-brands fa-mastodon"></i>
            </a>
            <a href="https://linkedin.com/in/paolobietolini" target="_blank" rel="noreferrer noopener nofollow">
                <i class="fas fa-brands fa-linkedin"></i>
            </a>
        </nav>
        </header>`
    }
}
customElements.define('header-template', Header)