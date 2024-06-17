import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#0088FE', '#FF8042'];

const PieChartComponent = ({ data }) => {
  const total = data.reduce((acc, entry) => acc + entry.value, 0);
  const efficiency = Math.round((data[0].value / total) * 100); // Calculate the efficiency percentage

  return (
    <div style={{ backgroundColor: '#FFF', margin: 'auto', textAlign: 'center', padding: '20px', borderRadius: '20px', width: '309px', height: '395px' }}>
      <h3 style={{ marginBottom: '10px', color: '#1A1A3D', fontSize: '16px' }}>Efficiency</h3>
      <h2 style={{ marginTop: 0, color: '#1A1A3D', fontSize: '24px' }}>{efficiency}%</h2>
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx={125}
          cy={125}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div>
          <label style={{ color: '#1A1A3D', fontSize: '14px' }}>From</label>
          <input type="date" style={{ display: 'block', margin: '10px auto', padding: '5px', borderRadius: '5px', border: '1px solid #ddd' }} />
        </div>
        <div>
          <label style={{ color: '#1A1A3D', fontSize: '14px' }}>To</label>
          <input type="date" style={{ display: 'block', margin: '10px auto', padding: '5px', borderRadius: '5px', border: '1px solid #ddd' }} />
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
