import AppComponent from "./components/AppComponent/AppComponent.js";
import PokemonCardComponent from "./components/PokemonCardComponent/PokemonCardComponent.js";

const appComponent: HTMLElement = document.querySelector(".root")!;

new AppComponent(appComponent);

const pokemonApp: HTMLElement = document.querySelector(".container")!;

new PokemonCardComponent(pokemonApp);
