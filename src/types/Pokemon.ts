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
  