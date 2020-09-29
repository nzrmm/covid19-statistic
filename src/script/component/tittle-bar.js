import imgvirus from '../../assets/img/virus.png';

class TittleBar extends HTMLElement {
  connectedCallback() {
    this.renderElemen();
  }

  renderElemen() {
    this.innerHTML = `
        <div class="col-md-12" >
            <img src="${imgvirus}" width="100" height="100" alt="logo">
            <h2 id="" class="mt-3">Covid 19 Coronavirus - Global Monitoring</h2>
            <div id="template-lastupdate"></div>
        </div>
        `;
  }
}

customElements.define('tittle-bar', TittleBar);
