import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Setting from "./pages/Setting";
import RoutLayOut from "./RootLayouts";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Box, Container } from "@mui/material";
import SelectField from "./components/SelectField";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RoutLayOut />}>
        <Route path="/" element={<Setting />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/finalscreen" element={<FinalScreen />} />
        <Route path="/selectfield" element={<SelectField />} />
      </Route>
    )
  );

  return (
    <>
      <Container maxWidth="sm">
        <Box textAlign={"center"} mt={5}>
          <div>
            <RouterProvider router={router} />
          </div>
        </Box>
      </Container>
    </>
  );
}

export default App;
