import React from 'react';
import { iconInterface } from './IconInterface';

const StyledArrow: React.FC<iconInterface> = ({ className }) => {
   return (
      <svg
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         xmlns="http://www.w3.org/2000/svg"
         className={`${className} fill-current`}
      >
         <path
            opacity="0.4"
            d="M11.3079 16.1539C14.3228 16.1539 17.8812 10.3941 18.5632 9.23939C18.6943 9.01808 18.7223 8.76478 18.6618 8.5349C18.6024 8.3082 18.4568 8.10402 18.2391 7.97556C17.8028 7.71414 17.2348 7.86198 16.9757 8.29963C15.542 10.7227 12.7498 14.3078 11.3079 14.3078V16.1539Z"
         />
         <path d="M11.3078 14.3078C9.86783 14.3078 7.07555 10.7225 5.64017 8.29947C5.38171 7.86193 4.81586 7.71424 4.37648 7.97547C3.93802 8.23486 3.79217 8.8007 4.05248 9.23916C4.73463 10.3939 8.29309 16.1539 11.3078 16.1539V14.3078Z" />
      </svg>
   );
};
export default StyledArrow;
