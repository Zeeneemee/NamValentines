import { useContext, useState } from "react";
import { ThemeContext } from "../pages/year1";
import { Opening } from "./body";

import './css/page.css';

const Pagination = () => {
  const { no, setNo } = useContext(ThemeContext);
  const {setOpen, setShowImage} = useContext(Opening)
  const [page,setPage] = useState(1)
  const totalPages = 29;

const handlePageChange =  (newPage) => {
  if (newPage >= 0 && newPage < totalPages) {
    setShowImage(false); // Hide the image
    setOpen(true); // Open UI elements

    // Wait for setShowImage and setOpen to complete before proceeding

    // Now that the UI is open, update the image


    // Delay the change of the page by a small duration (e.g., 100ms)
    setTimeout(() => {
    setNo(newPage);
      setPage(newPage + 1); // Increment the page value for display (starting from 1)
    }, 100); // Adjust the delay time as needed
  }
  if(page >= totalPages){
    setPage(totalPages);
  }
};
  

  const arrowStyle = {
    fontSize: '5rem',
  };

  return (
    <div className="pagination">
      <i
        onClick={() => handlePageChange(no - 1)}
        className={`bi bi-arrow-left ${no === 0 ? 'disabled' : ''}`}
        style={arrowStyle}
      ></i>
      <h1>{page}</h1>
      <i
        onClick={() => handlePageChange(no + 1)}
        className={`bi bi-arrow-right ${no === totalPages ? 'disabled' : ''}`}
        style={arrowStyle}
      ></i>
    </div>
  );
};

export default Pagination;
