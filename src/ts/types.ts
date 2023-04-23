export interface PokemonStructure {
  url: string;
  name: string;
}

export interface PokemonListStructure {
  results: PokemonStructure[];
}

export interface Name {
  name: string;
}
export interface PokemonTypeStructure {
  slot: number;
  type: Name;
}

export interface PokemonData {
  name: string;
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: PokemonTypeStructure[];
}
