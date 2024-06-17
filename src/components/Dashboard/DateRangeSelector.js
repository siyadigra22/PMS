import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CalendarIcon } from '../../assets/calendar.svg'; // Import your SVG icon
import { ReactComponent as DropIcon } from '../../assets/frame.svg'; // Import your SVG icon

const DateRangeSelector = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Custom input component for DatePicker
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="relative w-40">
      <input
        className="px-4 py-2 border rounded w-full"
        onClick={onClick}
        value={value}
        readOnly
        ref={ref}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <CalendarIcon className="w-5 h-5 text-gray-600" />
      </div>
    </div>
  ));

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="relative flex items-center space-x-4 p-4 bg-white rounded-xl shadow" style={{ width: '1299px', height: '58px', borderRadius: '20px' }}>
        <div className="flex items-center space-x-2 mr-auto">
          <span className="text-gray-500">Lorem ipsum is dummy text</span>
        </div>
        <div className="flex items-center space-x-2 ml-auto">
          <span className="text-gray-600">From</span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            customInput={<CustomInput />}
          />
        </div>

        <span className="text-gray-600">to</span>
        <div className="flex items-center space-x-2">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            customInput={<CustomInput />}
          />
          <div className="relative">
            <DropIcon className="cursor-pointer text-gray-600" style={{ width: '37px', height: '37px' }} onClick={toggleDropdown} />
            {dropdownVisible && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-40" style={{ width: '121px', borderRadius: '8px' }}>
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">PDF</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Excel</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">CSV</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRangeSelector;