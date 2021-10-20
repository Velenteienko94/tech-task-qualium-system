import { useEffect, useState } from "react";

type TUseFetchProps = {
  title?: string;
  start?: string;
  url?: string;
  limit?: string;
};

export type TResponseItem = {
  description: string;
  id: string;
  price: string;
  title: string;
  inCart: boolean;
};

const useFetch = ({
  title,
  start = "0",
  url,
  limit = "10",
}: TUseFetchProps) => {
  const [respData, setRespData] = useState<Array<TResponseItem>>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (url) {
        return await fetch(url).then((res) =>
          res.json().then((res) => setRespData(res))
        );
      }
      return await fetch(
        `http://localhost:8000/products?${
          title ? `title=${title}` : ""
        }&_start=${start}${limit ? `&_limit=${limit}` : ""}`
      ).then((res) => res.json().then((res) => setRespData(res)));
    };
    fetchData();
  }, [title, start, url, limit]);
  return respData;
};

export default useFetch;
