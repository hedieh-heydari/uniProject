import React from 'react';
import { iconInterface } from './IconInterface';

const CardExchangeIcon: React.FC<iconInterface> = ({ className }) => {
   return (
      <svg
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={`${className}`}
         stroke="currentColor"
         strokeWidth="1.5"
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0768 13.1172H4.99858C3.77063 13.1172 3 13.9871 3 15.2179V18.5398C3 19.7707 3.76674 20.6406 4.99858 20.6406H10.0768C11.3086 20.6406 12.0754 19.7707 12.0754 18.5398V15.2179C12.0754 13.9871 11.3086 13.1172 10.0768 13.1172Z"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            d="M3 15.7834H12.0754"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.0016 3.39844H13.9234C12.6954 3.39844 11.9248 4.26832 11.9248 5.49919V8.82108C11.9248 10.052 12.6915 10.9218 13.9234 10.9218H19.0016C20.2334 10.9218 21.0002 10.052 21.0002 8.82108V5.49919C21.0002 4.26832 20.2334 3.39844 19.0016 3.39844Z"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            d="M11.9248 6.06854H21.0002"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            d="M3 8.47065C3 5.64792 5.28854 3.35938 8.11128 3.35938L7.50411 4.9921"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            d="M20.9999 15.5273C20.9999 18.3501 18.7114 20.6386 15.8887 20.6386L16.4958 19.0059"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
      </svg>
   );
};
export default CardExchangeIcon;
