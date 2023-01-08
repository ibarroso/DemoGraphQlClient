import {
  Box,
  Divider,
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
import React from "react";

export default function ResultsPanel() {
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
          {true && (
            <TableContainer sx={{ maxHeight: 500 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell key={1} align="left" style={{ minWidth: 50 }}>
                      <Typography variant="h6">Characters</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    {
                      name: "Character 1",
                    },
                    {
                      name: "Character 2",
                    },
                  ].map((char, index) => {
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
                          {char.name}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Stack>
      </Paper>
    </>
  );
}
