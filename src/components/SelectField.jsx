import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const SelectField = (props) => {
  const { label } = props;
  const [value, setValue] = useState("");
  const handelChange = (e) => {
    console.log("change", e.target.value);
  };

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel> {label}</InputLabel>
        <Select value={value} label={label} onChange={handelChange}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
