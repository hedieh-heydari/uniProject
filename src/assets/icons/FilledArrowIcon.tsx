import React from 'react';
import { iconInterface } from './IconInterface';

const FilledArrowIcon: React.FC<iconInterface> = ({ className }) => {
   return (
      <svg
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         className={`${className} fill-current`}
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4413 16.697C12.9465 16.2032 12.7757 14.5305 12.7296 12.9197L12.7241 11.0736C12.773 9.00867 13.013 7.74405 13.4413 7.31575C13.9619 6.79605 14.8296 7.06282 15.5275 7.35267C16.9758 7.95359 21.1628 10.4884 21.1628 12.0068C21.1628 13.5714 16.7893 16.0979 15.461 16.649C14.7391 16.949 13.9351 17.189 13.4413 16.697Z"
         />
         <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7297 12.9196L5.14481 12.9196C4.63435 12.9196 4.22174 12.5069 4.22174 11.9965C4.22174 11.486 4.63435 11.0734 5.14481 11.0734L12.7242 11.0734L12.7297 12.9196Z"
         />
      </svg>
   );
};
export default FilledArrowIcon;
