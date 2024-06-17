import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import '../../../styles/Dashboard.css';

const RadialBarChartComponent = () => {
  const total = 600;
  const rejected = 126;

  const data = [
    { name: 'Rejected', value: rejected, fill: 'url(#gradientRejected)' },
  ];

  return (
    <div style={{ backgroundColor: '#FFF', marginRight: '100px', marginLeft: '230px', textAlign: 'center', padding: '20px', borderRadius: '20px', width:'309px'  , height: '395px' }}>
      <h3 style={{ marginBottom: '10px', color: '#1A1A3D', fontSize: '16px' }}>Rejected Products</h3>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', gap: '10px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4318FF' }}></div>
          <span style={{ color: '#6E6E9F', fontSize: '14px' }}>Rejected</span>
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1A1A3D' }}></div>
          <span style={{ color: '#6E6E9F', fontSize: '14px' }}>Total</span>
        </span>
      </div>
      <div style={{ position: 'relative' }}>
        <RadialBarChart
          width={250}  // Adjusted width to fit within container
          height={219.615}
          cx={(250 / 2) - (-7)}  // Adjusted cx value
          cy={(219.615 / 2) + 80}  // Adjust cy as needed
          innerRadius={95}
          outerRadius={105}
          barSize={10}
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <defs>
            <linearGradient id="gradientRejected" x1="0" y1="0" x2="1" y2="0">
              <stop offset="23.84%" stopColor="#4318FF" stopOpacity={1} />
              <stop offset="81.07%" stopColor="#4318FF" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <PolarAngleAxis
            type="number"
            domain={[0, total]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background={{ fill: '#1A1A3D' }}
            dataKey="value"
            cornerRadius={0}
          />
        </RadialBarChart>
        <div style={{ position: 'absolute', top: '84%', left: '50%', transform: 'translate(-50%, -50%)'  }}>
          <h2 style={{ margin: 0,  color: '#2B3674',justifyContent: 'center' ,textAlign: 'center', fontFamily: 'DM Sans' , fontSize: '18px' , fontWeight: '700' , lineHeight: '30px' , width: '41px' ,height: '16px' , marginTop: '50px'  }}>{rejected}</h2>
          <p style={{ margin: 0, color: '#6E6E9F', justifyContent: 'center', textAlign: 'center', fontSize: '12px' , color: '#A3AED0;' , fontFamily: 'DM Sans' , fontSize: '12px' , fontWeight: '500' , lineHeight: '20px' , width: '51px' ,height: '10px' , marginTop: '10px' }}>Rejected</p>
        </div>
        <div style={{ position: 'absolute', top: 'calc(100% - 5px)', left: '33px', transform: 'translateY(-100%)', color: '#6E6E9F', fontSize: '14px' }}>
          0
        </div>
        <div style={{ position: 'absolute', top: 'calc(100% - 5px)', right: '26px', transform: 'translateY(-100%)', color: '#6E6E9F', fontSize: '14px' }}>
          {total}
        </div>
      </div>
    </div>
  );
};

export default RadialBarChartComponent;
