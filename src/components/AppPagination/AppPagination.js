import React from 'react';
import {Pagination} from 'react-bootstrap';

const AppPagination = (props) => {
  const {
        updatePageLimit, pageNumber
    } = props;

  return (
    <div className="pagination-container">
      <Pagination>
        <Pagination.First onClick={ () => updatePageLimit(1) } />
        <Pagination.Item onClick={ () => updatePageLimit(1) } className={(pageNumber === 1 ? 'active ' : '')}>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item onClick={ () => updatePageLimit(10) } className={(pageNumber === 10 ? 'active ' : '')}>{10}</Pagination.Item>
        <Pagination.Item onClick={ () => updatePageLimit(11) } className={(pageNumber === 11 ? 'active ' : '')}>{11}</Pagination.Item>
        <Pagination.Item onClick={ () => updatePageLimit(12) } className={(pageNumber === 12 ? 'active ' : '')}>{12}</Pagination.Item>
        <Pagination.Item onClick={ () => updatePageLimit(13) } className={(pageNumber === 13 ? 'active ' : '')}>{13}</Pagination.Item>
        <Pagination.Item onClick={ () => updatePageLimit(14) } className={(pageNumber === 14 ? 'active ' : '')}>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item onClick={ () => updatePageLimit(20) }>{20}</Pagination.Item>
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default AppPagination;

