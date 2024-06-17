import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header'; // Correct path to Header component
import Metrics from './Metrics/Metrics1'; // Correct path to Metrics component
import '../../styles/Dashboard.css'; // Correct path to CSS file
import NewSection from './NewSection'; // Correct path to NewSection component
import LineChart from './Charts/LineChart'; // Correct path to LineChart component
import RadialBarChartComponent from './Charts/RadialBarChartComponent'; // Correct path to RadialBarChartComponent
import PieChartComponent from './Charts/PieChartComponent'; // Correct path to PieChartComponent

const Dashboard = () => {
  // Sample data for PieChartComponent
  const pieChartData = [
    { name: 'Accepted', value: 274 },
    { name: 'Rejected', value: 126 },
  ];

  return (
    <div className="dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item xs={12}>
          <NewSection />
        </Grid>

        <Grid item xs={12}>
          <Metrics />
        </Grid>

        {/* Row for RadialBarChartComponent, LineChart, and PieChartComponent */}
        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent="space-around">
            <Grid item xs={12} md={4}>
              <div className="chart-container">
                <LineChart />
              </div>
            </Grid>
            <Grid item xs={12} md={4} className="radial-chart-container">
              <div className="chart-container">
                <RadialBarChartComponent />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="chart-container">
                <PieChartComponent data={pieChartData} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
