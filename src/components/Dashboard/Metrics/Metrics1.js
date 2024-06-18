import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import '../../../styles/Dashboard.css'; // Ensure the correct path
import Icon from '../../../assets/Icon.svg'; // Import the SVG icon for the first item
import Icon1 from '../../../assets/Icon (1).svg'; // Import the SVG icon for the second item
import Icon2 from '../../../assets/Icon (2).svg'; // Import the SVG icon for the third item
import Icon3 from '../../../assets/Icon (3).svg'; // Import the SVG icon for the fourth item
import Icon4 from '../../../assets/Icon (4).svg'; // Import the SVG icon for the fifth item

const Metrics = () => {
  const metrics = [
    { label: 'Product Produced', value: 372, color: 'green', text: 'Today' },
    { label: 'Reject Products', value: 200, color: 'red', text: 'Today' },
    { label: 'PPM', value: 1234567, color: 'blue', text: 'One Day Ago' },
    { label: 'Efficiency', value: '100%', color: 'purple', text: 'Live' },
    { label: 'Down Time', value: '2 Hrs', color: 'orange', text: 'Today' },
  ];

  return (
    <div className="metrics-container" style={{ display: 'flex', gap: '0px' }}>
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`metric-item ${
            index <= 4 ? 'custom-item' : ''
          } flex flex-col items-center`}
        >
          <Paper
            elevation={3}
            className="p-4 bg-[#F4F7FE] flex items-center justify-center"
            style={index <= 4 ? { width: '230.115px', height: '97px', borderRadius: '20px', background: '#FFF', flexShrink: 0, margin: '0' } : {}}
          >
            {/* Render the icon based on index */}
            {index === 0 && <img src={Icon} alt="Icon" style={{ width: '32.842px', height: '32.842px', marginRight: '8px', color: metric.color }} />}
            {index === 1 && <img src={Icon1} alt="Icon" style={{ width: '32.842px', height: '32.842px', marginRight: '8px', color: metric.color }} />}
            {index === 2 && <img src={Icon2} alt="Icon" style={{ width: '32.842px', height: '32.842px', marginRight: '8px', color: metric.color }} />}
            {index === 3 && <img src={Icon3} alt="Icon" style={{ width: '32.842px', height: '32.842px', marginRight: '8px', color: metric.color }} />}
            {index === 4 && <img src={Icon4} alt="Icon" style={{ width: '32.842px', height: '32.842px', marginRight: '8px', color: metric.color }} />}

            <div className="ml-2"> {/* Reduced margin to create space between icon and text */}
              <Typography
                variant="h6"
                style={{
                  width: '116.998px',
                  height: '22.579px',
                  flexShrink: 0,
                  color: '#2B3674',
                  fontFamily: 'DM Sans',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '24px',
                  letterSpacing: '-0.28px',
                }}
              >
                {metric.label}
              </Typography>
              <Typography
                variant="h4"
                style={{
                  width: '144px',
                  height: '31px',
                  flexShrink: 0,
                  color: '#2B3674',
                  fontFamily: 'DM Sans',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '32px',
                  letterSpacing: '-0.48px',
                }}
              >
                {metric.value}
              </Typography>
              {/* Render the text below the value */}
              <Typography
                variant="body1"
                style={{
                  width: '88px',
                  height: '14px',
                  color: '#A3AED0',
                  fontFamily: 'DM Sans',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '-0.24px',
                }}
              >
                {metric.text}
              </Typography>
            </div>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
