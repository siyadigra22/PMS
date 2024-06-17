import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#4318FF', '#E0E0E0'];

const PieChartComponent = () => {
  const data = [
    { name: 'Efficiency', value: 72 },
    { name: 'Remaining', value: 28 },
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', margin: 'auto', padding: '20px', borderRadius: '20px', width: '309px', height: '395px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <span style={{ color: '#2B3674;', fontSize: '16px', fontWeight: '700', fontFamily: 'DM Sans' , fontStyle: 'normal' , lineHeight: '28px' , letterSpacing: '-0.32px' , width: '121px', height: '22px' }}>Efficiency</span>
        <span style={{ color: '#1A1A3D', fontSize: '24px', fontWeight: '700' , fontStyle: 'normal' ,fontFamily: 'DM Sans' , lineHeight: '30px' , letterSpacing: '-0.48px' , width: '53px' , height: '16px', marginTop:'-5px'  }}>72%</span>
      </div>
      <div style={{ position: 'relative', flex: 1 }}>
        <PieChart width={260} height={260}>
          <Pie
            data={data}
            cx={130}
            cy={(130 / 2) + 50}
            startAngle={90}
            endAngle={-270}
            innerRadius={0}
            outerRadius={110}
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '-40px', padding: '0 20px' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div>
      <div style={{ color: '#6B7280', fontSize: '12px' }}>From</div>
      <div style={{ color: '#1A1A3D', fontSize: '14px', display: 'flex', alignItems: 'center', width: '121px' }}>
        20 June, 2024
        <span style={{ marginLeft: '5px', fontSize: '16px' }}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M6.33333 1.58331V3.95831" stroke="#A3AED0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.6667 1.58331V3.95831" stroke="#A3AED0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.77083 7.19623H16.2292" stroke="#A3AED0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.625 6.72915V13.4583C16.625 15.8333 15.4375 17.4166 12.6667 17.4166H6.33333C3.5625 17.4166 2.375 15.8333 2.375 13.4583V6.72915C2.375 4.35415 3.5625 2.77081 6.33333 2.77081H12.6667C15.4375 2.77081 16.625 4.35415 16.625 6.72915Z" stroke="#A3AED0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.425 10.8458H12.4321" stroke="#A3AED0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.425 13.2208H12.4321" stroke="#A3AED0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.49642 10.8458H9.50353" stroke="#A3AED0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.49642 13.2208H9.50353" stroke="#A3AED0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.56634 10.8458H6.57345" stroke="#A3AED0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.56634 13.2208H6.57345" stroke="#A3AED0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
      </div>
    </div>
    <div style={{ marginLeft: '20px' }}>
      <div style={{ color: '#6B7280', fontSize: '12px' }}>To</div>
      <div style={{ color: '#1A1A3D', fontSize: '14px', display: 'flex', alignItems: 'center' , width: '121px'}}>
        20 June, 2024
        <span style={{ marginLeft: '5px', fontSize: '16px' }}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M6.33333 1.58331V3.95831" stroke="#A3AED0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.6667 1.58331V3.95831" stroke="#A3AED0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.77083 7.19623H16.2292" stroke="#A3AED0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.625 6.72915V13.4583C16.625 15.8333 15.4375 17.4166 12.6667 17.4166H6.33333C3.5625 17.4166 2.375 15.8333 2.375 13.4583V6.72915C2.375 4.35415 3.5625 2.77081 6.33333 2.77081H12.6667C15.4375 2.77081 16.625 4.35415 16.625 6.72915Z" stroke="#A3AED0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.425 10.8458H12.4321" stroke="#A3AED0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.425 13.2208H12.4321" stroke="#A3AED0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.49642 10.8458H9.50353" stroke="#A3AED0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.49642 13.2208H9.50353" stroke="#A3AED0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.56634 10.8458H6.57345" stroke="#A3AED0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.56634 13.2208H6.57345" stroke="#A3AED0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default PieChartComponent;