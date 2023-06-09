import { type PokemonData } from "../../types";
import Component from "../Component/Component.js";

class PokemonCardComponent extends Component {
  private pokemonData: PokemonData;

  constructor(parentElement: Element, private readonly url: string) {
    super(parentElement, "pokemonCard", "li");
    (async () => this.getCardComponent())();
  }

  getCardComponent = async (): Promise<void> => {
    const response = await fetch(this.url);

    const pokemonData = (await response.json()) as PokemonData;
    this.pokemonData = pokemonData;
    this.renderHtml();
  };

  renderHtml(): void {
    this.domElement.innerHTML = `
    <div class= "card-pokemon">
    <img class "card-pokemon__img" src="${this.pokemonData.sprites.other["official-artwork"].front_default}"
    class= "card-img-top" alt= "Picture art of ${this.pokemonData.name}"/>
     <h2 class="pokemon__name" >${this.pokemonData.name}</h2>
    <ul class="pokemon__data">
    <li class="card-pokemon__data-item">
   <span class ="pokemon__data-label"> Type:</span>
    ${this.pokemonData.types[0].type.name}
    </li>
    </ul>
    </div>`;
  }
}

export default PokemonCardComponent;
