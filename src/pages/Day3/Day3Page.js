import React from 'react';
import { useParams } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { Navigation } from '../../containers';

const Day3Page = () => {
  const { taskNumber } = useParams();
  return (
    <div>
      <Navigation pageName={`Day 3, Task ${taskNumber}`}>
        <Typography variant='h5'>
          Day 3, Need to move code to this repo...
        </Typography>
      </Navigation>
    </div>
  );
}

export default Day3Page;

