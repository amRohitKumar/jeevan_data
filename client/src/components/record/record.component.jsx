import Typography from "@mui/material/Typography";

import {
  RecodComponentDiv,
  RecordImage,
  RecordContent,
  WrapperDiv,
} from "./record.style";

const RecordComponent = ({
  imageUrl,
  testedFor,
  result,
  testDate,
}) => {
    testDate = new Date(testDate);
    testDate = testDate.toUTCString();
  return (
    <RecodComponentDiv elevation={3}>
      <RecordImage src={imageUrl} alt="sample-image" />
      <RecordContent>
        <WrapperDiv>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ minWidth: "20%", textAlign: "left", mr: "15px" }}
          >
            Tested For:{" "}
          </Typography>
          <Typography variant="body1" component="span">
            {testedFor}
          </Typography>
        </WrapperDiv>
        <WrapperDiv>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ minWidth: "20%", textAlign: "left", mr: "15px" }}
          >
            Test Date:{" "}
          </Typography>
          <Typography variant="body1" component="span">
            {testDate}
          </Typography>
        </WrapperDiv>
        <WrapperDiv>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ minWidth: "20%", textAlign: "left", mr: "15px" }}
          >
            Result:{" "}
          </Typography>
          <Typography variant="body1" component="span">
            {result}
          </Typography>
        </WrapperDiv>
        {/* <WrapperDiv>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ minWidth: "20%", textAlign: "left", mr: "5px" }}
          >
            Accuracy:{" "}
          </Typography>
          <Typography variant="body1" component="span">
            {accuracy}
          </Typography>
        </WrapperDiv> */}
      </RecordContent>
    </RecodComponentDiv>
  );
};

export default RecordComponent;
