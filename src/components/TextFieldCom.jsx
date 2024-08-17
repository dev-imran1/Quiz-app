import { Box, FormControl, TextField } from "@mui/material";

const TextFieldCom = () => {
  const handelChange = () => {};
  return (
    <>
      <Box mt={3} width="100%">
        <FormControl fullWidth size="small">
          <TextField
            onChange={handelChange}
            variant="outlined"
            label="Amount of Questions"
            type="number"
            size="small"
          />
        </FormControl>
      </Box>
    </>
  );
};

export default TextFieldCom;
