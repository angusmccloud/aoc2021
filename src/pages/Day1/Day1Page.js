import React from 'react';
import { useParams } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { Navigation } from '../../containers';

const Day1Page = () => {
  const { taskNumber } = useParams();
  return (
    <div>
      <Navigation pageName={`Day 1, Task ${taskNumber}`}>
        <Typography variant='h5'>
          Day 1, Need to Build It!
        </Typography>
      </Navigation>
    </div>
  );
}

export default Day1Page;

