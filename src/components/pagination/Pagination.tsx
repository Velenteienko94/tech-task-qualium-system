import { useContext } from "react";
import useFetch from "../../hooks/FetchHook";
import { FilterContext } from "../../providers/filter-provider";

import "./styles.scss";

export const Pagination = () => {
  const { paginationValue, setPaginationValue } = useContext(FilterContext);

  const fullResp = useFetch({ url: "http://localhost:8000/products" });

  const quantityPages =
    fullResp.length > 10 ? Math.ceil(fullResp.length / 10) : 0;

  const paginationPages = Array.from(Array(quantityPages).keys());

  const onPaginationPageClick = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const target = ev.target as Element;
    setPaginationValue(
      (parseInt(target.innerHTML) > 1
        ? (parseInt(target.innerHTML) - 1).toString().concat("0")
        : 0
      ).toString()
    );
  };

  const onPrevClick = () => {
    setPaginationValue(Math.max(parseInt(paginationValue) - 10, 0).toString());
  };

  const onNextClick = () => {
    setPaginationValue(
      Math.min(
        (parseInt(paginationValue) || 0) + 10,
        (quantityPages - 1) * 10
      ).toString()
    );
  };

  return (
    <div>
      <button className="pagination_prev-btn" onClick={onPrevClick}>
        prev
      </button>
      {paginationPages.map((el) => (
        <button className="pagination_page-btn" onClick={onPaginationPageClick}>
          {el + 1}
        </button>
      ))}
      <button className="pagination_next-btn" onClick={onNextClick}>
        next
      </button>
    </div>
  );
};
