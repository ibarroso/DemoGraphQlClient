import SingleCharacterSearchResult, {
  CharacterInfo,
} from "types/iSingleCharacterSearchResult";

export default async function searchSingleCharacter(
  id: string,
  characterName: string
): Promise<CharacterInfo> {
  var searchResult: SingleCharacterSearchResult = {
    data: { characters: { results: [] } },
  };
  await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query {
        characters(page: 1, filter: {name:"${characterName}"}) {
          results {
            id
            name
            status
            species
            type
            gender
            image
            created
          }
        }
      }
        `,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      searchResult = result as SingleCharacterSearchResult;
    });

  var characterData: CharacterInfo[] =
    searchResult.data.characters.results.filter((cd) => cd.id === id);

  return characterData[0];
}
