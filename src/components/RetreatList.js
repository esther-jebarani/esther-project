
import React, { useEffect, useState } from 'react';
import RetreatCard from './RetreatCard';
import './RetreatList.css';
import axios from 'axios';

const RetreatList = () => {
  const [retreats, setRetreats] = useState([]);

  useEffect(() => {
    axios.get('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats')
      .then(response => {
        const data = response.data.slice(0, 3); // Only take the first three items
        setRetreats(data);
      });
  }, []);

  return (
    <div className="retreat-list">
      {retreats.map((retreat, index) => (
        <RetreatCard key={retreat.id} retreat={retreat} index={index} />
      ))}
    </div>
  );
};

export default RetreatList;
