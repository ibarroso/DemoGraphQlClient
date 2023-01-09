import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { CharacterFullInfo } from "types/iSingleCharacterSearchResult";

interface Props {
  setCharacterPanel: React.Dispatch<React.SetStateAction<boolean>>;
  characterInfo: CharacterFullInfo;
}

export default function CharacterPanel({
  setCharacterPanel,
  characterInfo,
}: Props) {
  return (
    <>
      <Paper elevation={3} sx={{ marginTop: "20px" }}>
        <Stack>
          <Box>
            <Grid justifyContent="space-around" alignItems="center" container>
              <Grid xs={1} item>
                <Button
                  variant="outlined"
                  onClick={() => setCharacterPanel(false)}
                >
                  Back
                </Button>
              </Grid>
              <Grid xs={10} item>
                <Typography variant="h3" textAlign={"center"}>
                  Character Information
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableBody>
                <TableRow tabIndex={-1} key={1}>
                  <TableCell
                    key={1}
                    align="left"
                    style={{
                      minWidth: 20,
                      maxWidth: 200,
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="h6">Id</Typography>
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
                    {characterInfo.id}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1} key={2}>
                  <TableCell
                    key={1}
                    align="left"
                    style={{
                      minWidth: 20,
                      maxWidth: 200,
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="h6">Name</Typography>
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
                    {characterInfo.name}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1} key={3}>
                  <TableCell
                    key={1}
                    align="left"
                    style={{
                      minWidth: 20,
                      maxWidth: 200,
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="h6">Status</Typography>
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
                    {characterInfo.status}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1} key={4}>
                  <TableCell
                    key={1}
                    align="left"
                    style={{
                      minWidth: 20,
                      maxWidth: 200,
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="h6">Species</Typography>
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
                    {characterInfo.species}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1} key={5}>
                  <TableCell
                    key={1}
                    align="left"
                    style={{
                      minWidth: 20,
                      maxWidth: 200,
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="h6">Type</Typography>
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
                    {characterInfo.type}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1} key={6}>
                  <TableCell
                    key={1}
                    align="left"
                    style={{
                      minWidth: 20,
                      maxWidth: 200,
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="h6">Gender</Typography>
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
                    {characterInfo.gender}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1} key={7}>
                  <TableCell
                    key={1}
                    align="left"
                    style={{
                      minWidth: 20,
                      maxWidth: 200,
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="h6">Origin</Typography>
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
                    {characterInfo.origin.name}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1} key={8}>
                  <TableCell
                    key={1}
                    align="left"
                    style={{
                      minWidth: 20,
                      maxWidth: 200,
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="h6">Location</Typography>
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
                    {characterInfo.location.name}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1} key={9}>
                  <TableCell
                    key={1}
                    align="left"
                    style={{
                      minWidth: 20,
                      maxWidth: 200,
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="h6">Image</Typography>
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
                    <CardMedia
                      component="img"
                      image={characterInfo.image}
                      alt="Character Image"
                    />
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1} key={10}>
                  <TableCell
                    key={1}
                    align="left"
                    style={{
                      minWidth: 20,
                      maxWidth: 200,
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="h6">Created</Typography>
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
                    {new Date(characterInfo.created).toLocaleDateString()}
                  </TableCell>
                </TableRow>
                <TableRow tabIndex={-1} key={11}>
                  <TableCell
                    key={1}
                    align="left"
                    style={{
                      minWidth: 20,
                      maxWidth: 200,
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="h6">Episodes</Typography>
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
                    {characterInfo.episode
                      .map((e) => ` ${e.episode}`)
                      .toString()}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Paper>
    </>
  );
}
