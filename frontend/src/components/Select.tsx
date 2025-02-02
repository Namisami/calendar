"use client"

import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";

interface Select<
  Value, 
  Multiple extends boolean | undefined, 
  DisableClearable extends boolean | undefined, 
  FreeSolo extends boolean | undefined, 
  ChipComponent extends React.ElementType = "div"
> extends Omit<AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>, "renderInput"> {
  renderInput?: AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>["renderInput"];
};

export default function Select(props: Select<string, undefined, undefined, undefined>) {
  return (
    <Autocomplete
      {...props}
      options={props.options}
      renderInput={(params) => <TextField {...params} />}
    />
  )
}