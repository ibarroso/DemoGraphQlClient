import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import searchCharacters from "helpers/searchCharacters";
import CharacterInfo from "types/iCharacterInfo";
import { CharacterFullInfo } from "types/iSingleCharacterSearchResult";
import searchSingleCharacter from "helpers/searchSingleCharacter";
import searchAllCharacters from "helpers/searchAllCharacters";
import ApiCallUiFeedback, {
  ApiCallRefs,
} from "components/core-ui/api-call-ui-feedback";

interface Props {
  setSearchResults: React.Dispatch<React.SetStateAction<CharacterInfo[]>>;
  setCharacterPanel: React.Dispatch<React.SetStateAction<boolean>>;
  setCharacterInfo: React.Dispatch<React.SetStateAction<CharacterFullInfo>>;
}

export default function SearchBar({
  setSearchResults,
  setCharacterPanel,
  setCharacterInfo,
}: Props) {
  const refApiCallUiFeedback = React.useRef<ApiCallRefs>(null);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<CharacterInfo[]>([]);
  const [searchPattern, setSearchPattern] = React.useState<string>("");
  const loading = open && options.length > 0;

  const refreshOptions = async (characterName: string): Promise<void> => {
    var result = await searchCharacters(characterName);
    setOptions(result);
  };

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <>
      <Autocomplete
        id="asynchronous-demo"
        open={open}
        onOpen={() => {
          setOpen(searchPattern.length > 0);
          refreshOptions(searchPattern);
        }}
        onClose={() => {
          setOpen(false);
        }}
        fullWidth
        onChange={async (e, newInputValue) => {
          e.preventDefault();
          if (newInputValue) {
            setSearchPattern(newInputValue?.name);
            setCharacterInfo(
              await searchSingleCharacter(
                newInputValue?.id,
                newInputValue?.name
              )
            );
            setCharacterPanel(true);
          }
        }}
        isOptionEqualToValue={() => true}
        getOptionLabel={(option) => `${option.name} - [id:${option.id}]`}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            value={searchPattern}
            onKeyDown={async (e) => {
              if (e.key === "Enter") {
                setOpen(false);
                e.stopPropagation();
                refApiCallUiFeedback.current?.OpenBackdrop();
                setSearchResults(await searchAllCharacters(searchPattern));
                refApiCallUiFeedback.current?.CloseBackdrop();
                setCharacterPanel(false);
              }
            }}
            onBlur={() => setSearchPattern("")}
            onChange={(e) => {
              setSearchPattern(e.target.value);
              setOpen(e.target.value.length > 0);
              refreshOptions(e.target.value);
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
      <ApiCallUiFeedback ref={refApiCallUiFeedback} />
    </>
  );
}
