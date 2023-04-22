export interface PokemonData {
  name: string;
  id: number;
  types: {
    slot: number;
    type: {
      name: string;
    };
  };
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}
