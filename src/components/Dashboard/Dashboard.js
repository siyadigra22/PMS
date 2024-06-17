import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Metrics from './Metrics/Metrics1';
import '../../styles/Dashboard.css';
import NewSection from './NewSection';
import LineChart from './Charts/LineChart';
import RadialBarChartComponent from './Charts/RadialBarChartComponent';
import PieChartComponent from './Charts/PieChartComponent';
import DateRangeSelector from './DateRangeSelector';
import PPMLineChart from './Charts/PPMLineChart'; // New import
import DowntimeChart from './Charts/DowntimeChart'; // New import

const Dashboard = () => {
  // Sample data for PieChartComponent
  const pieChartData = [
    { name: 'Accepted', value: 274 },
    { name: 'Rejected', value: 126 },
  ];

  return (
    <div className="dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ marginTop: '-20px' }}>
          <Header />
        </Grid>

        <Grid item xs={12} style={{ marginTop: '-30px' }}>
          <NewSection />
        </Grid>

        <Grid item xs={12}>
          <Metrics />
        </Grid>

        <Grid item xs={12} style={{ marginTop: '10px' }}>
          <DateRangeSelector />
        </Grid>

        {/* Row for RadialBarChartComponent, LineChart, and PieChartComponent */}
        <Grid item xs={12} style={{ marginTop: '-10px' }}>
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

        {/* New row for PPM Line Chart and Downtime Chart */}
        <Grid item xs={12} style={{ marginTop: '10px' }}>
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <div className="chart-container">
                <PPMLineChart />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="chart-container">
                <DowntimeChart />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
