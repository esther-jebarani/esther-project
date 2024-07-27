import React from 'react';
import './FilterSection.css';

const FilterSection = () => {
  return (
    <div className="filter-section">
      <input type="text" placeholder="Search by title..." />
      <select>
        <option value="">Filter by date</option>
        <option value="2024-2025">2024-2025</option>
        <option value="2025-2026">2025-2026</option>
      </select>
      <select>
        <option value="">Filter by type</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>
    </div>
  );
};

export default FilterSection;