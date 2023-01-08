interface Info {
  count: number;
  pages: number;
}

interface Name {
  name: string;
}

interface Characters {
  info: Info;
  results: Name[];
}

interface Data {
  characters: Characters;
}
export default interface SearchResult {
  data: Data;
}
