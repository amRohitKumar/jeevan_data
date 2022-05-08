import Typography from '@mui/material/Typography';
import {SuggestionComponentDiv, SuggestionContent} from './doctorSuggestion.style';

const DoctorSuggestion = ({ name, email, specialization, address }) => {
  return (
    <SuggestionComponentDiv>
      <SuggestionContent>
        <Typography variant="h6" gutterBottom component="div">
          Name :  {name}
        </Typography>
        <br />
        <Typography variant="caption" display="block" gutterBottom>
          Email :  {email}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
            Specialization :  {specialization}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
            Address :  {address}
        </Typography>
      </SuggestionContent>
    </SuggestionComponentDiv>
  );
};

export default DoctorSuggestion;
