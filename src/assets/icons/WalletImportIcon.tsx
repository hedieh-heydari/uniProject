import { iconInterface } from './IconInterface';

const WalletImportIcon = ({ className }: iconInterface) => {
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
            d="M20.9971 14.4061H17.1899C15.7917 14.4061 14.6582 13.2726 14.6582 11.8745C14.6582 10.4773 15.7917 9.34375 17.1899 9.34375H20.9971"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            d="M16.9966 11.8185H16.9936"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            d="M3 11.6114V8.62339C3 5.89712 5.20962 3.6875 7.93589 3.6875H16.0641C18.7904 3.6875 21 5.89712 21 8.62339V15.3729C21 18.0992 18.7904 20.3088 16.0641 20.3088H12.6383"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            d="M7.66638 15.6406L3 20.307"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
         <path
            d="M7.65902 19.3973L7.66681 15.6406L3.91016 15.6484"
            strokeLinecap="round"
            strokeLinejoin="round"
         ></path>
      </svg>
   );
};
export default WalletImportIcon;
