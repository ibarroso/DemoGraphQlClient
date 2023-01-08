import {
  Box,
  Divider,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import searchSingleCharacter from "helpers/searchSingleCharacter";
import SearchResult from "types/iSearchResult";
import { CharacterInfo } from "types/iSingleCharacterSearchResult";

interface Props {
  searchResults: SearchResult | null;
  setCharacterPanel: React.Dispatch<React.SetStateAction<boolean>>;
  setCharacterInfo: React.Dispatch<React.SetStateAction<CharacterInfo>>;
}

export default function ResultsPanel({
  searchResults,
  setCharacterPanel,
  setCharacterInfo,
}: Props) {
  console.log(searchResults?.data);
  return (
    <>
      <Paper elevation={3} sx={{ marginTop: "20px" }}>
        <Stack>
          <Box
            sx={{
              margin: "auto auto auto auto",
            }}
          >
            <Typography variant="h3">Search Results</Typography>
          </Box>
          <Divider />
          {searchResults &&
            searchResults.data.characters.results.length > 0 && (
              <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell key={1} align="left" style={{ minWidth: 50 }}>
                        <Typography variant="h6">ID</Typography>
                      </TableCell>
                      <TableCell key={2} align="left" style={{ minWidth: 50 }}>
                        <Typography variant="h6">Characters</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {searchResults.data.characters.results.map(
                      (character, index) => {
                        return (
                          <TableRow hover tabIndex={-1} key={index}>
                            <TableCell
                              key={1}
                              align="left"
                              style={{
                                minWidth: 20,
                                maxWidth: 200,
                                overflow: "hidden",
                              }}
                            >
                              {character.id}
                            </TableCell>
                            <TableCell
                              key={2}
                              align="left"
                              style={{
                                minWidth: 20,
                                maxWidth: 200,
                                overflow: "hidden",
                              }}
                            >
                              <Link
                                href="#"
                                onClick={async (e) => {
                                  e.preventDefault();
                                  setCharacterInfo(
                                    await searchSingleCharacter(
                                      character.id,
                                      character.name
                                    )
                                  );
                                  setCharacterPanel(true);
                                }}
                              >
                                {character.name}
                              </Link>
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
        </Stack>
      </Paper>
    </>
  );
}
