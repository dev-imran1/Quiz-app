import { Box, Button } from "@mui/material";
import SelectField from "../components/SelectField";
import TextFieldCom from "../components/TextFieldCom";

const Setting = () => {

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handelSubmit}>
      <SelectField label="Catagorey" />
      <SelectField label="Defficulty" />
      <SelectField label="Type" />
      <TextFieldCom />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Setting;
