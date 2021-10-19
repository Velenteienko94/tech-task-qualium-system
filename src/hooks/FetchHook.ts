import { useEffect, useState } from "react";

type TUseFetchProps = {
  title?: string;
  start?: string;
  url?: string;
};

export type TResponseItem = {
  description: string;
  id: number;
  price: string;
  title: string;
};

const useFetch = ({ title, start = "0", url }: TUseFetchProps) => {
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
        }&_start=${start}&_limit=10`
      ).then((res) => res.json().then((res) => setRespData(res)));
    };
    fetchData();
  }, [title, start, url]);
  return respData;
};

export default useFetch;
