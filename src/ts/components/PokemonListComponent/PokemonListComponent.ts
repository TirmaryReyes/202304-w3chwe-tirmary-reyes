import {
  type PokemonListStructure,
  type PokemonStructure,
} from "../../types.js";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

class PokemonListComponent extends Component {
  private pokemons: PokemonStructure[] = [];

  constructor(parentElement: Element) {
    super(parentElement, "pokemon-list", "ul");

    (async () => this.getPokemons())();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(`${apiUrl}`);
    const pokemons = (await response.json()) as PokemonListStructure;

    this.pokemons = pokemons.results;
    this.renderHtml();
  }

  renderHtml(): void {
    this.pokemons.forEach((pokemon) => {
      new PokemonCardComponent(this.domElement, pokemon.url);
    });
  }
}

export default PokemonListComponent;
