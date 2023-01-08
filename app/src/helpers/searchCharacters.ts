import CharacterInfo from "types/iCharacterInfo";

export default async function searchCharacters(
  characterName: string,
  page: number = 1
): Promise<CharacterInfo[]> {
  var searchResult: CharacterInfo[] = [];
  await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query {
        characters(page : ${page}, filter: {name:"${characterName}"}) {
          results {
            id
            name
          }
        }
      }
        `,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      searchResult = result.data.characters.results;
    });

  return searchResult;
}
