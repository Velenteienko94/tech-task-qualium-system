import { useEffect, useState } from "react";

type TUseFetchProps = {
  title?: string;
  start?: string;
  url?: string;
  limit?: string;
  method?: string;
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
  method = "GET",
}: TUseFetchProps) => {
  const [respData, setRespData] = useState<Array<TResponseItem>>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (url) {
        return await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json().then((res) => setRespData(res)));
      }
      return await fetch(
        `http://localhost:8000/products?${
          title ? `title=${title}` : ""
        }&_start=${start}${limit ? `&_limit=${limit}` : ""}`,
        {
          method,
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json().then((res) => setRespData(res)));
    };
    fetchData();
  }, [title, start, url, limit, method]);
  return respData;
};

export default useFetch;
