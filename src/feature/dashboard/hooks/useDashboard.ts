import { useEffect, useState } from 'react';
import {
  getAllTransactionController,
  getTopwithdrawalController,
  getTotalAmountOfMoneyController,
  getTotalTransactionController
} from '../helpers/controller';

export const useDashboard = () => {
  const [totalAmount, setTotalAmount] = useState<any>();
  const [allTransaction, setAllTransaction] = useState<any>();
  const [totalTransaction, setTotalTransaction] = useState<any>();
  const [topwithdrawal, setTopwithdrawal] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      await Promise.all([
        getTotalAmountOfMoneyController(setTotalAmount),
        getAllTransactionController(setAllTransaction),
        getTotalTransactionController(setTotalTransaction),
        getTopwithdrawalController(setTopwithdrawal),
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { totalAmount, allTransaction, totalTransaction, topwithdrawal, loading };
};
