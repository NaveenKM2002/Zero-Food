import React, { useState } from 'react';

const DateCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [completionDate, setCompletionDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const calculateCompletionDate = () => {
    if (startDate) {
      const start = new Date(startDate);
      const completion = new Date(start);
      completion.setDate(start.getDate() + 90);

      setCompletionDate(completion.toDateString());
    } else {
      alert('Please select a start date.');
    }
  };

  return (
    <div>
      <label htmlFor="startDate">Enter Course Start Date:</label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={handleStartDateChange}
      />
      <button onClick={calculateCompletionDate}>Calculate Completion Date</button>
      {completionDate && (
        <p>
          Course completion date: {completionDate}
        </p>
      )}
    </div>
  );
};

export default DateCalculator;
