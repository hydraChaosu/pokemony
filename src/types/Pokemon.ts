interface Pokemon {
    name: string;
    url: string;
  }
  
interface PokemonData {
  results: Pokemon[];
  count: number;
  previous: string;
  next: string;
}

interface PokemonStatsDetails {
  base_stat: number;
    stat: {
      name: string;
    }  
}

interface PokemonTypesDetails {
  slot: number;
  type: {
    name: string;
  }
}

interface PokemonAbilitiesDetails {
  ability: {
    name: string;
    url: string;
  },
  slot: number;
}

interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    front_shiny: string;
  },
  stats: PokemonStatsDetails[];
  types: PokemonTypesDetails[];
  abilities: PokemonAbilitiesDetails[];  
}

interface PokemonAbilitiesDetailsInfo {
  effect_entries: [
    {
      effect: string
    } 
  ]
}


  