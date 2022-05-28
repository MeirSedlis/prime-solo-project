import { List, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailItem from "../DetailItem/DetailItem.jsx";
import { useParams, useHistory } from "react-router-dom";

function SymptomDetail() {
    const params = useParams();
    const detailID = params.id;

    useEffect(()=>{
        dispatch({
            type: 'FETCH_DETAILS',
            payload: detailID
        })
    }, [detailID])

  const dispatch = useDispatch();
  
  const details = useSelector((store) => store.detail);

  console.log("params: ", params);

  return (
    <>
      <Typography align="center" variant="h6">
        Symptom Details
      </Typography>
      <List>
        {details.map((log) => {
          return <DetailItem key={log.id} log={log} />;
        })}
      </List>
    </>
  );
}

export default SymptomDetail;
