import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "container", "div");

    this.renderHtml();
  }

  renderHtml() {
    this.domElement.innerHTML = `<header class="main-header">
    <img src="./img/pokemon-logo.svg" alt="pokemon logo">
    </header>`;
  }
}

export default AppComponent;
