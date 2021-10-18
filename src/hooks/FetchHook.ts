import { useEffect, useState } from "react";

type TUseFetchProps = {
  pageNumber?: number;
  query?: { key: string; value: string };
};

export type TResponseItem = {
  description: string;
  id: number;
  price: string;
  title: string;
};

const useFetch = ({ pageNumber, query }: TUseFetchProps) => {
  const [respData, setRespData] = useState<Array<TResponseItem>>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (pageNumber) {
        return await fetch(
          `http://localhost:8000/products?_page=${pageNumber}`
        ).then((res) => res.json().then((res) => setRespData(res)));
      }
      if (query) {
        const queryValue = query.value.replace(/" "/g, "%");
        return await fetch(
          `http://localhost:8000/products?${query.key}=${queryValue}`
        ).then((res) => res.json().then((res) => setRespData(res)));
      }
    };
    fetchData();
  }, [pageNumber, query?.key, query?.value]);
  return respData;
};

export default useFetch;
