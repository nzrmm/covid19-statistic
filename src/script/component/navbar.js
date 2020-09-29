class NavBar extends HTMLElement {
  connectedCallback() {
    this.renderElemen();
  }

  renderElemen() {
    this.innerHTML = `
        <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1">Covid 19</span>
        </nav>
        `;
  }
}

customElements.define('nav-bar', NavBar);
