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

interface Props {
  setSearchResults: React.Dispatch<React.SetStateAction<SearchResult>>;
}

export default function SearchBar({ setSearchResults }: Props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<string[]>([]);
  const [searchPattern, setSearchPattern] = React.useState<string>("");
  const loading = open && options.length === 0;

  const searchCharacter = async (
    characterName: string
  ): Promise<SearchResult> => {
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
      });
    return searchResult;
  };

  const refreshOptions = async (characterName: string): Promise<void> => {
    var result = await searchCharacter(characterName);
    setOptions(result.data.characters.results.map((x) => x.name));
  };

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    if (active) refreshOptions(searchPattern);

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
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
        setOpen(false);
      }}
      onOpen={() => {
        setOpen(searchPattern.length > 0);
      }}
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
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              setSearchResults(await searchCharacter(searchPattern));
            }
            setSearchPattern("");
            setOpen(false);
          }}
          onChange={(e) => {
            setSearchPattern(e.target.value);
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
