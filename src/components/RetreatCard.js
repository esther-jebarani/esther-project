// RetreatCard.js
import React from 'react';
import './RetreatCard.css';
import retreat1 from '../images/retreat1.jpeg';
import retreat2 from '../images/retreat2.jpeg';
import retreat3 from '../images/retreat3.jpeg';

const images = [retreat1, retreat2, retreat3];

const RetreatCard = ({ retreat, index }) => {
  return (
    <div className="retreat-card">
      <img src={images[index % images.length]} alt={retreat.title} />
      <div className="retreat-details">
        <h2>{retreat.title}</h2>
        <p>{retreat.description}</p>
        <p><strong>Date:</strong> {retreat.date}</p>
        <p><strong>Location:</strong> {retreat.location}</p>
        <p><strong>Price:</strong> {retreat.price}</p>
      </div>
    </div>
  );
};

export default RetreatCard;
