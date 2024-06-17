import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../../../styles/Dashboard.css';

const DowntimeChart = () => {
  const data = [
    { name: 'Downtime', value: 2 },
    { name: 'Uptime', value: 22 },
  ];

  const COLORS = ['#FF0000', '#CCCCCC'];

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3>Downtime</h3>
      <h2>02 Hours</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>02 Hr</div>
    </div>
  );
};

export default DowntimeChart;