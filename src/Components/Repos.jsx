

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Repos = (props) => {
 
  const { repos } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 1;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(repos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(repos.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, repos]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % repos.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="repos">
        {currentItems.map((repo) => {
          return (
            <div className="repos">
              <ul key={repo.id}>
                <li>
                  Repository Name: <a href={repo.html_url}>{repo.name}</a>
                </li>
                <li>Language: {repo.language}</li>
                <li>Visibility: {repo.Visibility}</li>
                <li>ID: {repo.id}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );

  // const repositoryList = repos.length !== 0 ?(
  //     repos.map((repo) => (
  //         <ul key={repo.id}>
  //             <li>
  //                 Repository Name:{" "}
  //                 <a href={repo.html_url}>
  //                     {repo.name}
  //                 </a>
  //             </li>
  //             <li>Language: {repo.language}</li>
  //             <li>Visibility: {repo.Visibility}</li>
  //             <li>ID: {repo.id}</li>
  //         </ul>

  //     ))
  // ):(
  //     <p>Loading...</p>
  // )
  // return (
  //     <div className="repos">
  //         {repositoryList}
  //     </div>
  //  );
};

export default Repos;
