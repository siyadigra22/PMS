import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line
} from 'recharts';
import '../../../styles/Dashboard.css';

const data = [
  { date: '01', value: 2000 },
  { date: '03', value: 3000 },
  { date: '05', value: 2500 },
  { date: '07', value: 4000 },
  { date: '09', value: 3500 },
  { date: '11', value: 3000 },
  { date: '13', value: 4500 },
  { date: '15', value: 5000 },
  { date: '17', value: 5500 },
  { date: '19', value: 6000 },
  { date: '21', value: 7000 },
  { date: '23', value: 6500 },
  { date: '25', value: 7500 },
  { date: '27', value: 8000 },
  { date: '29', value: 8978 },
  { date: '31', value: 8500 },
];

const PPMLineChart = () => {
  return (
    <div className="chart-container-custom">
      <div className="chart-header">
        <div className="chart-heading" style={{marginLeft:'-57px', width: '150px' , height: '22px' , color: '#6D6D6D;' , fontFamily:'DM Sans' , fontSize:'14px' , fontStyle: 'normal' , fontWeight: '500' , lineHeight:'24px' , letterSpacing:'-0.28px'}}>
          PPM
        </div>
        <div className="chart-subheading" style={{width: '83px' , height: '40px' , color: '#2B3674' , fontFamily:'DM Sans' , fontSize:'34px' , fontStyle: 'normal' , fontWeight: '700' , lineHeight:'42px' , letterSpacing:'-0.68px'}}>
          8978
          <span className="chart-subheading-unit" style={{width: '88px' , height: '14px' , color: '#A3AED0' , fontFamily:'DM Sans' , fontSize:'12px' , fontStyle: 'normal' , fontWeight: '400' , lineHeight:'20px' , letterSpacing:'-0.24px', flexDirection:'column' , display: 'inline-block', // Ensure it's displayed inline
    whiteSpace: 'nowrap',}}>22 June, 2024</span>
        </div>
        <div className="chart-dates" style={{ marginTop: '-30px' , marginLeft:'400px' , }}>
          From: 20 June, 2024 📅 To: 20 June, 2024 📅
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
          <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
  <stop offset="-13.49%" stopColor="#F3F0FF" stopOpacity="0.5" />
  <stop offset="98.07%" stopColor="rgba(241, 237, 255, 0)" stopOpacity="0.1" />
</linearGradient>

          </defs>
          <XAxis 
            dataKey="date" 
            axisLine={{ stroke: '#E0E0E0' }}
            tickLine={false}
            tick={{ fill: '#92959E', fontSize: 10 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#92959E', fontSize: 10 }}
            domain={[0, 'dataMax + 1000']}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#4318FF"
            fill="linear-gradient(180deg, #F3F0FF -13.49%, rgba(241, 237, 255, 0.00) 98.07%);"
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#4318FF" 
            strokeWidth={2} 
            dot={false} 
            activeDot={{ r: 8, fill: "white", stroke: "#4318FF", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PPMLineChart;
