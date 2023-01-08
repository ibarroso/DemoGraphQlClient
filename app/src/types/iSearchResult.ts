interface Info {
  count: number;
  next: number;
}

interface CharacterData {
  id: string;
  name: string;
}

interface Characters {
  info: Info;
  results: CharacterData[];
}

interface Data {
  characters: Characters;
}
export default interface SearchResult {
  data: Data;
}
