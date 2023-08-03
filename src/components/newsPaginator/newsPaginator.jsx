import { ArrovStyle, ArrovStyleLeft, Wraper } from './newsPaginator.styled.js';
import ReactPaginate from 'react-paginate';
import './pagination.css';


const NewsPaginator = ({  setItems, limit, news,current,find }) => {

  const handlePageClick = (event) => {
    event.selected=0;
    const newOffset = (!find) ? (event.selected * limit) % news.length : (event.selected * limit) % current.length ;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    if(!find){
      setItems(prevState => [...prevState,...news.slice(newOffset, newOffset + limit)]);
    }else{
      setItems(prevState => [...prevState,...current.slice(newOffset, newOffset + limit)]);
    }
  };
  console.log(find);
  return (
    <>
      {(news.length > 6 || current.length > 6 ) && (
        <Wraper>
          <ReactPaginate
            nextLabel={<ArrovStyle />}
            onPageChange={(e)=>handlePageClick(e)}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            pageCount={((current.length>0) ? Math.ceil(current.length/limit) : Math.ceil(news.length/limit)) || 0 }
            previousLabel={<ArrovStyleLeft />}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-arr"
            nextClassName="page-item"
            nextLinkClassName="page-arr"
            breakLabel=""
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active-btn"
            renderOnZeroPageCount={null}
          />
        </Wraper>
      )}
    </>
  );
};

export default NewsPaginator;
