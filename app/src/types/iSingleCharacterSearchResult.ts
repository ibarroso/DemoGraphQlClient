export interface CharacterInfo {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: Date;
}

interface Characters {
  results: CharacterInfo[];
}

interface Data {
  characters: Characters;
}

export default interface SingleCharacterSearchResult {
  data: Data;
}
