import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import SearchResult from "types/iSearchResult";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<string[]>([]);
  const loading = open && options.length === 0;
  var searchResult: SearchResult = {
    data: {
      characters: { info: { count: 0, pages: 0 }, results: [{ name: "" }] },
    },
  };
  var pattern: string = "";

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      //await sleep(1e3);
      console.log(pattern);
      await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          query {
            characters(filter: {name:"${pattern}"}) {
              info {
                count
                pages
              }
              results {
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
          console.log(searchResult.data.characters);
          if (active) {
            setOptions([
              ...searchResult.data.characters.results.map((x) => x.name),
            ]);
          }
        });
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      open={open}
      //onChange={(e) => setOpen(true)}
      onKeyDown={(e) => console.log(e.key)}
      /*       onOpen={(e) => {
        setOpen(true);
      }} */
      onClose={() => {
        setOpen(false);
      }}
      fullWidth
      onInputChange={(event, newInputValue) => {
        console.log(newInputValue);
      }}
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          onChange={(e) => {
            console.log(e.target.value);
            pattern = e.target.value;
            setOpen(e.target.value.length > 0);
          }}
          {...params}
          label="Search Character"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
