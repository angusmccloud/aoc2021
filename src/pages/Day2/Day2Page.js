import React from 'react';
import { useParams } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { Navigation } from '../../containers';

const Day2Page = () => {
  const { taskNumber } = useParams();
  return (
    <div>
      <Navigation pageName={`Day 2, Task ${taskNumber}`}>
        <Typography variant='h5'>
          Day 2, Need to move code to this repo...
        </Typography>
      </Navigation>
    </div>
  );
}

export default Day2Page;

