import React from 'react';
import { Grid } from '@material-ui/core';
import LineChart from './LineChart';
import RadialBarChartComponent from './RadialBarChartComponent';

const Charts = () => {
  const lineChartData = [
    // Line chart data...
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <LineChart data={lineChartData} />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadialBarChartComponent />
      </Grid>
    </Grid>
  );
};

export default Charts;
