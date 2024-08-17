import { Box, Button, CircularProgress, Typography } from "@mui/material";
import SelectField from "../components/SelectField";
import TextFieldCom from "../components/TextFieldCom";
import useAxios from "../hooks/useAxios";

const Setting = () => {
  const { response, error, loading } = useAxios({ url: "https://opentdb.com/api_category.php" });
  console.log(response);


  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Box mt={20}>
        <Typography variant="h6" mt={20} color="red">
          Something went wrong!
        </Typography>
      </Box>
    );
  }


  const difficultyOptions = [
    {id:"easy", name:"Easy"},
    {id:"medium", name:"Medium"},
    {id:"hard", name:"Hard"},
  ];

  const typeOptions = [
    {id:"multiple", name:"Multiple Choise"},
    {id:"boolean", name:"True/False"},
  ]

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handelSubmit}>
      <SelectField options={response.trivia_categories} label="Catagorey" />
      <SelectField options={difficultyOptions} label="Defficulty" />
      <SelectField options={typeOptions} label="Type" />
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
