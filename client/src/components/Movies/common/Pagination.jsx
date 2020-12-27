import React from "react";
import _ from "lodash";
import PropTypes from 'prop-types'

const Pagination = ({ itemsCount, pageSize, onPageChange,currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  //   console.log(pagesCount);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  //   console.log(pages);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page, key) => (
          <li key={key} className={page===currentPage ? 'page-item active':'page-item'}>
            <a className="page-link"  onClick={()=>onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};


Pagination.propTypes = {
    itemsCount:PropTypes.number.isRequired, 
    pageSize:PropTypes.number.isRequired, 
    onPageChange:PropTypes.func.isRequired,
    currentPage:PropTypes.number.isRequired
}

export default Pagination;
