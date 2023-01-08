import { Container, Stack } from "@mui/material";
import PageTitle from "components/page-title";
import React from "react";
import SearchBar from "components/search-bar";
import ResultsPanel from "components/results-panel";
import CharacterInfo from "types/iCharacterInfo";
import CharacterPanel from "components/character-panel";
import { CharacterFullInfo } from "types/iSingleCharacterSearchResult";

export default function AppContainer() {
  const [searchResults, setSearchResults] = React.useState<CharacterInfo[]>(
    null!
  );
  const [characterPanel, setCharacterPanel] = React.useState<boolean>(false);
  const [characterInfo, setCharacterInfo] = React.useState<CharacterFullInfo>(
    null!
  );

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          maxHeight: "500px",
        }}
      >
        <Stack>
          <PageTitle />
          <SearchBar
            setSearchResults={setSearchResults}
            setCharacterPanel={setCharacterPanel}
            setCharacterInfo={setCharacterInfo}
          />
          {!characterPanel && (
            <ResultsPanel
              setCharacterPanel={setCharacterPanel}
              searchResults={searchResults}
              setCharacterInfo={setCharacterInfo}
            />
          )}
          {characterPanel && (
            <CharacterPanel
              setCharacterPanel={setCharacterPanel}
              characterInfo={characterInfo}
            />
          )}
        </Stack>
      </Container>
    </>
  );
}
