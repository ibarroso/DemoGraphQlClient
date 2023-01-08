import { Container, Stack } from "@mui/material";
import PageTitle from "components/page-title";
import React from "react";
import SearchBar from "components/search-bar";
import ResultsPanel from "components/results-panel";

export default function AppContainer() {
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
          <SearchBar />
          <ResultsPanel />
        </Stack>
      </Container>
    </>
  );
}
