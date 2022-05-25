import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SymptomItem from "../SymptomItem/SymptomItem.jsx";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useHistory } from 'react-router';

function SymptomTracker() {
  useEffect(() => {
    dispatch({
      type: "FETCH_USER_SYMPTOMS",
    });
  }, []);
  
  const symptoms = useSelector((store) => store.symptom);
  const dispatch = useDispatch();
  const history = useHistory();

  

  return (
    <>
      <Typography align="center" variant="h6">
        tap a symptom to log it
      </Typography>
      {symptoms.map((symptom) => {
        return <SymptomItem symptom={symptom} />;
      })}
      <Box textAlign="center">
        <Button size="large" variant="contained" onClick={()=> {history.push('/track-new')}}>
          Track a New Symptom
        </Button>
      </Box>
    </>
  );
}
export default SymptomTracker;
