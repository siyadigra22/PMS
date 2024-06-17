import React from 'react';
import { Typography, Box } from '@material-ui/core';

const Metric = ({ label, value, color }) => {
  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6" color={color}>
        {value}
      </Typography>
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
};

export default Metric;