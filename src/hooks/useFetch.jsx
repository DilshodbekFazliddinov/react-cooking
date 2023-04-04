import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [postData, setPostData] = useState(null);

  const addNewData = (newRecipe) => {
    setPostData({
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
  };

  useEffect(() => {
    const fetchData = async (fetchConfig) => {
      setIsPending(true);
      try {
        const req = await fetch(url, { ...fetchConfig });
        if (!req.ok) {
          throw new Error(req.statusText);
        }

        const data = await req.json();
        setData(data);
        setError(null);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };
    if (method === "GET") {
      fetchData();
    }

    if (method === "POST" && postData) {
      fetchData(postData);
    }
  }, [url, method, postData]);
  return { data, error, isPending, addNewData };
};
