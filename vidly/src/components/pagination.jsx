import React, { Component } from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage } = props;
    const pagesCount = itemsCount / pageSize;
    if (pagesCount <= 1) {
        return null
    }
    const pages = _.range(1, pagesCount + 1)
    console.log("itemcout", itemsCount, "pagescount", pagesCount, "pagesize,", pageSize, "currentpage", currentPage)
    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (<li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                    <a onClick={() => props.onPageChange(page)} className="page-link">{page}</a>
                </li>))}
            </ul>
        </nav>);
}

export default Pagination;