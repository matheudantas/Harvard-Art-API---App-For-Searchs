import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getMaxPagesClassificationThunk } from "../../store/art/thunk";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [load, setLoad] = useState(false);

  const classifications = useSelector((state) => state.art.allClassifications);

  useEffect(() => {
    dispatch(getMaxPagesClassificationThunk(value, setLoad));
  }, [dispatch, value]);
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="search-bar-classifications"
        value={value}
        disableClearable
        options={load && classifications.map((i) => i.name)}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for classification"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
};
export default SearchBar;
