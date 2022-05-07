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
  testedOn,
  accuracy,
}) => {
  return (
    <RecodComponentDiv elevation={3}>
      <RecordImage src={imageUrl} alt="sample-image" />
      <RecordContent>
        <WrapperDiv>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ minWidth: "20%", textAlign: "left", mr: "5px" }}
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
            sx={{ minWidth: "20%", textAlign: "left", mr: "5px" }}
          >
            Test Date:{" "}
          </Typography>
          <Typography variant="body1" component="span">
            {testedOn}
          </Typography>
        </WrapperDiv>
        <WrapperDiv>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ minWidth: "20%", textAlign: "left", mr: "5px" }}
          >
            Result:{" "}
          </Typography>
          <Typography variant="body1" component="span">
            {result}
          </Typography>
        </WrapperDiv>
        <WrapperDiv>
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
        </WrapperDiv>
      </RecordContent>
    </RecodComponentDiv>
  );
};

export default RecordComponent;
