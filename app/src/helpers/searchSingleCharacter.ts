import SingleCharacterSearchResult, {
  CharacterFullInfo,
} from "types/iSingleCharacterSearchResult";

export default async function searchSingleCharacter(
  id: string,
  characterName: string
): Promise<CharacterFullInfo> {
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
            origin{name}
            location{name}
            image
            created
            episode{episode}
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

  var characterData: CharacterFullInfo[] =
    searchResult.data.characters.results.filter((cd) => cd.id === id);

  return characterData[0];
}
