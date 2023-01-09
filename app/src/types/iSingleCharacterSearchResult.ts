export interface CharacterFullInfo {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  created: Date;
  episode: Epidode[];
}

interface Epidode {
  episode: string;
}

interface Origin {
  name: string;
}
interface Location {
  name: string;
}

interface Characters {
  results: CharacterFullInfo[];
}

interface Data {
  characters: Characters;
}

export default interface SingleCharacterSearchResult {
  data: Data;
}
