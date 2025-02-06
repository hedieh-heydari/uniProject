import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useCategory = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const page = location.search.split('=')[1];
   const [selectedTab, setSelectedTab] = useState<string>(page);

   useEffect(() => {
      if (page) {
         setSelectedTab(page);
      } else {
         setSelectedTab('import');
      }
   }, [page]);

   const tabData = [
      {
         key: 'import',
         title: 'ورودی'
      },
      {
         key: 'export',
         title: 'خروجی'
      },
      {
         key: 'boxes',
         title: 'صندوق‌ها'
      }
   ];

   return {
      navigate,
      tabData,
      selectedTab
   };
};
