import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "div", "container");

    this.renderHtml();
  }

  renderHtml() {
    this.domElement.innerHTML = `<header class="main-header">
    <img src="./img/pokemon-logo.svg" alt="pokemon logo">
    </header>`;
  }
}

export default AppComponent;
