import React from 'react';
   import './Pagination.css';

   const Pagination = () => {
     return (
       <div className="pagination">
         <button className="prev-button">Previous</button>
         <button className="next-button">Next</button>
       </div>
     );
   };

   export default Pagination;