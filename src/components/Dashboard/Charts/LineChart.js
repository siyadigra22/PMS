import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import '../../../styles/Dashboard.css'; 

const data = [
  { date: '01', value: 2000 },
  { date: '02', value: 4000 },
  { date: '03', value: 3000 },
  { date: '04', value: 2000 },
  { date: '05', value: 2780 },
  { date: '06', value: 1890 },
  { date: '07', value: 2390 },
  { date: '08', value: 3490 },
  { date: '09', value: 2000 },
  { date: '10', value: 2780 },
  { date: '11', value: 1890 },
  { date: '12', value: 2390 },
  { date: '13', value: 3490 },
  { date: '14', value: 4300 },
  { date: '15', value: 2100 },
  { date: '16', value: 3900 },
  { date: '17', value: 3200 },
  { date: '18', value: 3000 },
  { date: '19', value: 4000 },
  { date: '20', value: 5000 },
  { date: '21', value: 7000 },
  { date: '22', value: 372 },
  { date: '23', value: 8978 },
  { date: '24', value: 6500 },
  { date: '25', value: 8000 },
  { date: '26', value: 6800 },
  { date: '27', value: 7800 },
  { date: '28', value: 9200 },
  { date: '29', value: 8700 },
  { date: '30', value: 7500 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Product Produced: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const ProductionChart = () => {
  return (
    <div className="container">
      <div className="chart-header">
        <div className="chart-heading">Total Product Produced</div>
        <div className="chart-subheading">
          372
          <span className="chart-subheading-unit">22 June, 2024</span>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2CD9FF" stopOpacity={1} />
                <stop offset="100%" stopColor="#2CD9FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              tick={{ 
                width: 35.183,
                height: 12.251,
                fill: '#92959E',
                textAlign: 'center',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: 8.447,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal'
              }}
            />
            <YAxis 
              tick={{ 
                width: 35.183,
                height: 12.251,
                fill: '#92959E',
                textAlign: 'center',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: 8.447,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal'
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2CD9FF"
              fill="url(#gradientColor)"
              strokeWidth={3}
              dot={false}
            />
            <Line type="monotone" dataKey="value" stroke="#2CD9FF" strokeWidth={3} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductionChart;
