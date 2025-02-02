"use client"

import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";

interface CustomAutocompleteProps<
  Value, 
  Multiple extends boolean | undefined, 
  DisableClearable extends boolean | undefined, 
  FreeSolo extends boolean | undefined, 
  ChipComponent extends React.ElementType = "div"
> extends Omit<AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>, "renderInput"> {
  renderInput?: AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>["renderInput"];
};

export default function CustomAutocomplete(props: CustomAutocompleteProps<string, true, undefined, undefined>) {
  return (
    <Autocomplete
      {...props}
      multiple
      options={props.options}
      renderInput={(params) => <TextField {...params} />}
    />
  )
}