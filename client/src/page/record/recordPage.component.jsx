import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import api from "../../api/users";
import { useSelector } from "react-redux";

import { selectUser } from "../../redux/features/users/userSlice";

import { RecordPageDiv, RecordSection } from "./recordPage.style";
import RecordComponent from "../../components/record/record.component";


const RecordPage = () => {
  const [records, setRecords] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchReports = async () => {
      const res = await api.get(`/reports/${user.email}`);
      // console.log(res.data);
      setRecords(res.data);
    };
    fetchReports();
  }, []);
  return (
    <RecordPageDiv>
      <Typography
        variant="h2"
        component="div"
        sx={{ mb: "10px", ml: "1.5em", fontWeight: "400" }}
      >
        Reports -
      </Typography>
      <RecordSection>
        {records.map((record) => (
          <RecordComponent key={record._id} {...record} />
        ))}
      </RecordSection>
    </RecordPageDiv>
  );
};

export default RecordPage;
