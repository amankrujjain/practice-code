import React, {useState} from 'react'

const Pagination = () => {
   // Create an array with "John" 10 times
   const names = new Array(19).fill('John');

   // Set up state for current page
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 5;
 
   // Calculate the number of pages
   const totalPages = Math.ceil(names.length / itemsPerPage);
 
   // Get current names to display
   const currentNames = names.slice(
     (currentPage - 1) * itemsPerPage,
     currentPage * itemsPerPage
   );
 
   // Handle page navigation
   const handlePrev = () => {
     setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
   };
 
   const handleNext = () => {
     setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
   };
 
   return (
     <div>
       <h1>Pagination Example</h1>
       <ol>
         {currentNames.map((name, index) => (
           <li key={index}>{name}</li>
         ))}
       </ol>
       <button onClick={handlePrev} disabled={currentPage === 1}>
         Prev
       </button>
       <button onClick={handleNext} disabled={currentPage === totalPages}>
         Next
       </button>
     </div>
   );
}

export default Pagination