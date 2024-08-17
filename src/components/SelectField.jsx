import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const SelectField = (props) => {
  const { label,options } = props;
  const [value, setValue] = useState("");
  const handelChange = (e) => {  
    setValue(e.target.value)
  };
  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel> {label}</InputLabel>
        <Select value={value} label={label} onChange={handelChange}>
        {options && options.length > 0 ? (
            options.map(({ id, name }) => (
              <MenuItem value={id} key={id}>
                {name}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No options available</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
