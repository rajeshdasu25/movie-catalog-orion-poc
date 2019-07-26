import React from 'react';

const SearchInfo = (props) => {
	const {
        query, totalRecords
    } = props;
  
  let records = totalRecords && (totalRecords !== undefined) ? totalRecords : 0;

	return (
		<div className="search-info-container">
        <h3>You Searched for: <span className="search-query">{query}</span>,&nbsp;
        <span className="search-query">{records}</span> records found..!!!</h3>
		</div>
	);

};

export default SearchInfo;