import Typography from "@mui/material/Typography";

import { RecordPageDiv, RecordSection } from "./recordPage.style";
import RecordComponent from "../../components/record/record.component";

const records = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/200",
    testedFor: "Cancer",
    result:
      "Cancer with 50% surity. Lorem epsum dfkkj dfdlkf f lfdkljf dlf lkdlk fdlf kjfd kfdk jfdklf klfkl klfdl fdldlf dklf kdfdkfk dklf fdf lk dlfdl dlfdlf l dlflf djfd lf .",
    testedOn: "7 April 2022, 2:27 AM",
    accuracy: '85%',
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/200",
    testedFor: "Cancer",
    result:
      "Cancer with 50% surity. Lorem epsum dfkkj dfdlkf f lfdkljf dlf lkdlk fdlf kjfd kfdk jfdklf klfkl klfdl fdldlf dklf kdfdkfk dklf fdf lk dlfdl dlfdlf l dlflf djfd lf .",
    testedOn: "7 April 2022, 2:27 AM",
    accuracy: '85%',
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/200",
    testedFor: "Cancer",
    result:
      "Cancer with 50% surity. Lorem epsum dfkkj dfdlkf f lfdkljf dlf lkdlk fdlf kjfd kfdk jfdklf klfkl klfdl fdldlf dklf kdfdkfk dklf fdf lk dlfdl dlfdlf l dlflf djfd lf .",
    testedOn: "7 April 2022, 2:27 AM",
    accuracy: '85%',
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/200",
    testedFor: "Cancer",
    result:
      "Cancer with 50% surity. Lorem epsum dfkkj dfdlkf f lfdkljf dlf lkdlk fdlf kjfd kfdk jfdklf klfkl klfdl fdldlf dklf kdfdkfk dklf fdf lk dlfdl dlfdlf l dlflf djfd lf .",
    testedOn: "7 April 2022, 2:27 AM",
    accuracy: '85%',
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/200",
    testedFor: "Cancer",
    result:
      "Cancer with 50% surity. Lorem epsum dfkkj dfdlkf f lfdkljf dlf lkdlk fdlf kjfd kfdk jfdklf klfkl klfdl fdldlf dklf kdfdkfk dklf fdf lk dlfdl dlfdlf l dlflf djfd lf .",
    testedOn: "7 April 2022, 2:27 AM",
    accuracy: '85%',
  },
];

const RecordPage = () => {
  return (
    <RecordPageDiv>
      <Typography variant="h2" component="div" sx={{mb: '10px', ml: '1.5em', fontWeight: '400'}}>
        Reports -
      </Typography>
      <RecordSection>
        {records.map((record) => (
            <RecordComponent key={record.id} {...record} />
        ))}
      </RecordSection>
    </RecordPageDiv>
  );
};

export default RecordPage;
