import { useSelector, useDispatch } from "react-redux";
import { paginationActions } from "../store/slice/pagination-slice";

export const usePagination = () => {
  const page = useSelector((state) => state.pagination.page);
  const productsPerPage = useSelector(
    (state) => state.pagination.productsPerPage
  );
  const dispatch = useDispatch();

  const indexOfLastPage = page + productsPerPage;
  const indexOfFirstPage = indexOfLastPage - productsPerPage;
  const onShowSizeChange = (current, pageSize) => {
    dispatch(paginationActions.setProductsPerPage(pageSize));
  };

  const setPage = (value) => {
    dispatch(paginationActions.setPage(value));
  };

  /* const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }

    return originalElement;
  }; */

  return [indexOfLastPage, indexOfFirstPage, onShowSizeChange, setPage];
};
