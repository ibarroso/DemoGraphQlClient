import { Container, Stack } from "@mui/material";
import PageTitle from "components/page-title";
import React from "react";
import SearchBar from "components/search-bar";
import ResultsPanel from "components/results-panel";
import SearchResult from "types/iSearchResult";

export default function AppContainer() {
  const [searchResults, setSearchResults] = React.useState<SearchResult>(null!);

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
          <SearchBar setSearchResults={setSearchResults} />
          <ResultsPanel searchResults={searchResults} />
        </Stack>
      </Container>
    </>
  );
}
