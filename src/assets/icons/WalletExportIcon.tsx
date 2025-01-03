import { iconInterface } from './IconInterface';

const WalletExportIcon = ({ className }: iconInterface) => {
   return (
      <svg
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth="1.5"
         stroke="currentColor"
         className={`${className}`}
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M20.9981 14.4061H17.1909C15.7927 14.4061 14.6602 13.2726 14.6602 11.8745C14.6602 10.4773 15.7927 9.34375 17.1909 9.34375H20.9981"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            d="M16.9946 11.8185H16.9917"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            d="M3 11.6114V8.62339C3 5.89712 5.20962 3.6875 7.93589 3.6875H16.0641C18.7904 3.6875 21 5.89712 21 8.62339V15.3729C21 18.0992 18.7904 20.3088 16.0641 20.3088H12.6383"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            d="M3 20.307L7.66638 15.6406"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            d="M6.75665 20.3036L3 20.3113L3.00778 16.5547"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
      </svg>
   );
};
export default WalletExportIcon;
