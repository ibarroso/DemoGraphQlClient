import SearchResult from "types/iSearchResult";

export default async function searchCharacter(
  characterName: string
): Promise<SearchResult> {
  var searchResult: SearchResult = {
    data: { characters: { info: { count: 0, next: 0 }, results: [] } },
  };
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
            count
            next
          }
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
      searchResult = result as SearchResult;
    });

  return searchResult;
}
