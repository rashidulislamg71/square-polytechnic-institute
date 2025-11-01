import { useEffect, useState } from "react";

const useFetchingData = (localData = [], apiUrl = null, delay = 500) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        if (apiUrl) {
          // Backend data
          const response = await fetch(apiUrl);
          if (!response.ok) throw new Error("API থেকে ডেটা লোড ব্যর্থ হয়েছে!");
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          // local data
          setData(localData);
        }

        setTimeout(() => setLoading(false), delay);
      } catch (err) {
        console.error(err);
        setError("ডেটা লোড করতে সমস্যা হয়েছে। একটু পরে আবার চেষ্টা করুন।");
        setLoading(false);
      }
    };

    fetchData();
  }, [localData, apiUrl, delay]);

  return { data, loading, error };
};

export default useFetchingData;
