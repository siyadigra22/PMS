import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../../../styles/Dashboard.css';

const DowntimeChart = () => {
  const data = [
    { name: 'Downtime', value: 2 },
    { name: 'Uptime', value: 22 },
  ];

  const COLORS = ['#FF4B6E', '#E6E6E6'];

  return (
    <div className="downtime-container" style={{ width: '463px', height: '395px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', marginTop: '110px', marginLeft: '-56px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: '#666', margin: '0' , width: '121px' , height: '22px' , color: '#2B3674' , fontSize: '16px' , fontFamily: 'DM Sans' , fontStyle:'normal' , fontWeight: '700' , lineHeight:'28px' , letterSpcing: '-0.32px' }}>Downtime</h3>
        <h2 style={{ color: '#2B3674', margin: '5px 0', fontSize: '34px' , width: '149.814px' , height: '39.884px' , fontStyle:'normal' , fontFamily:'DM Sans' , fontWeight:'700' , lineHeight:'42px' , letterSpacing:'-0.68px' }}>02 Hours</h2>
      </div>
      <div style={{ width: '100%', height: 200, position: 'relative' }}>
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
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>02 Hr</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <div>From: 20 June, 2024</div>
        <div>To: 20 June, 2024</div>
      </div>
    </div>
  );
};

export default DowntimeChart;
