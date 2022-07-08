import { useState, useEffect } from 'react';

import APIClient from '../../services/APIClient';

export const useClothing = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [clothingData, setClothingData] = useState({});

   useEffect(() => {
    const execute = async () => {
      setLoading(true);
      try {
        const data = await APIClient.getClothingInfo();
        setClothingData(data);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    execute();
   }, []);

  return { clothingData, error, loading };
};
