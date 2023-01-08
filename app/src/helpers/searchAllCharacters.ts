import CharacterInfo from "types/iCharacterInfo";
import searchCharacters from "./searchCharacters";

async function getPages(characterName: string): Promise<number> {
  var count: number = 0;
  await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query {
            characters(filter: {name:"${characterName}"}) {
              info {
                pages
              }
            }
          }
            `,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      count = result.data.characters.info.pages;
    });

  return count;
}

export default async function searchAllCharacters(
  characterName: string
): Promise<CharacterInfo[]> {
  var searchResult: CharacterInfo[] = [];

  const pagesCount = await getPages(characterName);
  for (let index = 1; index <= pagesCount; index++) {
    searchResult = searchResult.concat(
      await searchCharacters(characterName, index)
    );
  }

  return searchResult;
}
