import { type PokemonData } from "../../types";
import Component from "../Component/Component.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

class PokemonCardComponent extends Component {
  private pokemonData: PokemonData;

  constructor(parentElement: HTMLElement) {
    super(parentElement, "pokemonCard", "li");
    (async () => this.getCardComponent())();
  }

  getCardComponent = async (): Promise<void> => {
    const response = await fetch(`${apiUrl}7`);

    const pokemonData = (await response.json()) as PokemonData;
    this.pokemonData = pokemonData;
    this.renderHtml();
  };

  renderHtml(): void {
    this.domElement.innerHTML = `
    <div class= "card-pokemon">
    <img src="${this.pokemonData.sprites.other["official-artwork"].front_default}"
    class= "card-img-top" alt= "Picture art of ${this.pokemonData.name}">
    </div>`;
  }
}

export default PokemonCardComponent;
