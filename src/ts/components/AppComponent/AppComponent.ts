import Component from "../Component/Component.js";
import PokemonListComponent from "../PokemonListComponent/PokemonListComponent.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "container", "div");

    this.renderHtml();
  }

  renderHtml() {
    this.domElement.innerHTML = `<header class="main-header">
    <img class= "main-header__logo" src="./img/pokemon-logo.svg" alt="pokemon logo">
    </header>
    <main class="main"> </main>`;

    const mainContainer = this.domElement.querySelector(".main")!;
    new PokemonListComponent(mainContainer);
  }
}

export default AppComponent;
