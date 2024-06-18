import React, { useState } from 'react'; // Import useState from react package
import logo from '../../assets/logo.png';
import calendar from '../../assets/calendar.svg';
import clock from '../../assets/clock.svg';
import notificationIcon from '../../assets/notification.svg';
import settingsIcon from '../../assets/setting-2.svg';
import userImage from '../../assets/Elipse 5.png';
import '../../index.css';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const notifications = [
    { id: 1, message: "Admin 1 inactive the machine.", time: "02:30 | 02 July, 2024" },
    { id: 2, message: "Admin 2 active the machine.", time: "02:30 | 02 July, 2024" },
    { id: 3, message: "Admin 4 inactive the machine.", time: "02:30 | 02 July, 2024" },
  ].map(notification => ({
    ...notification,
    messageStyle: {
      color: '#000',
      fontFamily: 'DM Sans',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '18px', // 128.571%
    }
  }));

  return (
    <header style={{ backgroundColor: '#F4F7FE', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img src={logo} alt="logo" style={{ height: '62px', width: '62px' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: '#A0AEC0', fontWeight: '400', fontSize: '12px', fontFamily: 'DM Sans' }}>Welcome</span>
          <span style={{ color: '#2B3674', fontWeight: '700', fontSize: '20px', fontFamily: 'DM Sans', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '100%' }}>George West</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', width: '110px', height: '37px', flexShrink: '0', borderRadius: '8px', background: '#FFF', fontFamily: 'DM Sans', fontSize: '14px', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', letterSpacing: '-0.28px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" style={{ marginRight: '8px' }}>
              <circle cx="2.5" cy="2.5" r="2.5" fill="#00C914" />
            </svg>
            Machine 2
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <img src={calendar} alt="calendar" style={{ height: '19px', width: '19px' }} />
          <span style={{ color: '#A3AED0', fontFamily: 'DM Sans', fontSize: '14px', fontStyle: 'normal', fontWeight: '500', lineHeight: '30px', letterSpacing: '-0.28px' }}>Today</span>
          <span style={{ color: '#2B3674', fontFamily: 'DM Sans', fontSize: '14px', fontStyle: 'normal', fontWeight: '500', lineHeight: '30px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%', letterSpacing: '-0.28px' }}>04 June</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <img src={clock} alt="clock" style={{ height: '19px', width: '19px' }} />
          <span style={{ color: '#2B3674', fontFamily: 'DM Sans', fontSize: '14px', fontStyle: 'normal', fontWeight: '500', lineHeight: '30px', letterSpacing: '-0.28px' }}>14:32</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '181px', height: '45px', borderRadius: '30px', background: '#FFF', boxShadow: '14px 17px 40px 4px rgba(112, 144, 176, 0.08)', flexShrink: '0', justifyContent: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img
              src={notificationIcon}
              alt="notification"
              style={{ height: '24px', width: '24px', cursor: 'pointer' }}
              onClick={toggleNotifications}
            />
            {showNotifications && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                width: '300px',
                backgroundColor: '#FFF',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                padding: '10px',
              }}>
                <h3 style={{ margin: '0 0 10px', color: '#2B3674', fontSize: '12px' , fontFamily:'DM Sans' , fontStyle:'normal' , fontWeight:'700' , lineHeight:'18px' }}>Notifications</h3>
                {notifications.map(notification => (
                  <div key={notification.id} style={{ borderBottom: '1px solid #E2E8F0', padding: '10px 0' }}>
                    <p style={{ margin: '0', color: '#000', fontSize: '14px' , fontWeight:'500' , lineHeight: '18px' }}>{notification.message}</p>
                    <p style={{ margin: '5px 0 0', color: '#A3AED0', fontSize: '10px' ,fontWeight:'400' , lineHeight: '20px',letterSpacing:'-0.2px' }}>{notification.time}</p>
                  </div>
                ))}
                <a href="#" style={{ display: 'block', textAlign: 'center', color: '#4318FF;', textDecoration: 'none', marginTop: '10px', fontSize: '12px' , fontWeight:'500' , lineHeight: '18px' , fontFamily:'DM Sans'}}>View all Notifications</a>
              </div>
            )}
          </div>
          <img src={settingsIcon} alt="settings" style={{ height: '24px', width: '24px', cursor: 'pointer' }} />
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', position: 'relative' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <g clip-path="url(#clip0_72_2069)">
                <path d="M9.95691 18C12.7329 18 15.2683 16.737 16.948 14.6675C17.1965 14.3613 16.9255 13.9141 16.5415 13.9872C12.175 14.8188 8.1651 11.4709 8.1651 7.06303C8.1651 4.52398 9.52431 2.18914 11.7334 0.931992C12.0739 0.738211 11.9883 0.221941 11.6013 0.150469C11.0589 0.0504468 10.5085 8.21369e-05 9.95691 0C4.98902 0 0.956909 4.02578 0.956909 9C0.956909 13.9679 4.98269 18 9.95691 18Z" fill="#A3AED0" />
              </g>
              <defs>
                <clipPath id="clip0_72_2069">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {/* Add any badge or indicator for settings if needed */}
          </button>
          <img src={userImage} alt="user" style={{ height: '32px', width: '32px', borderRadius: '50%', cursor: 'pointer' }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
