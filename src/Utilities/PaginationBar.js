import React, { useState, useEffect } from "react";
import "./Pagination.css";

function PaginationBar({ totalPages, onPageChange, page }) {
  const [currentPage, setCurrentPage] = useState(page);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };
  useEffect(() => {
    setCurrentPage(page);
    onPageChange(page);
  }, [page]);
  console.log(page);
  const renderPagination = () => {
    const paginationItems = [];
    let startPage = 1;
    let endPage = totalPages;

    // Calculate start and end page based on current page and total pages
    if (totalPages > 8) {
      if (currentPage <= 5) {
        endPage = 8;
      } else if (currentPage >= totalPages - 4) {
        startPage = totalPages - 7;
      } else {
        startPage = currentPage - 4;
        endPage = currentPage + 3;
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      paginationItems.push(
        <li key={page} className={currentPage === page ? "active" : ""}>
          <button onClick={() => handleClick(page)}>
            <a
              href="#topRight"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {page}
            </a>
          </button>
        </li>
      );
    }

    return paginationItems;
  };

  return (
    <div className="pagination">
      <ul className="pagination-list">{renderPagination()}</ul>
    </div>
  );
}

export default PaginationBar;
