import { FC, useMemo, useState } from 'react';
import { ISidebar } from './interfaces';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FilledArrowIcon from '../../assets/icons/FilledArrowIcon';
import StyledArrow from '../../assets/icons/StyledArrow';
import Logo from '../../assets/icons/Logo';
import DebitCardIcon from '../../assets/icons/DebitCardIcon';
import UserIcon from '../../assets/icons/UserIcon';
import LogoutIcon from '../../assets/icons/LogoutIcon';
import WalletImportIcon from '../../assets/icons/WalletImportIcon';
import WalletExportIcon from '../../assets/icons/WalletExportIcon';

const Sidebar: FC<ISidebar> = ({ open, setOpen }) => {
   const navigate = useNavigate();
   let location = useLocation();
   const pathname = location.pathname;
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
   const [nestedOpen, setNestedOpen] = useState<{ [key: string]: boolean }>({});

   const routes = useMemo(() => {
      let tempRoute: any[] = [
         {
            isShow: true,
            name: 'dashboard',
            path: '/',
            title: 'داشبورد',
            icon: <DebitCardIcon className='w-6 h-6'/>
         },
         {
            isShow: true,
            name: 'deposit',
            path: '/deposit',
            title: 'درآمد',
            icon: <WalletImportIcon className='w-6 h-6'/>
         },
         {
            isShow: true,
            name: 'withdrawal',
            path: '/withdrawal',
            title: 'هزینه',
            icon: <WalletExportIcon className='w-6 h-6'/>
         },
         {
            isShow: true,
            name: 'profile',
            path: '/profile',
            title: 'پروفایل',
            icon: <UserIcon className='w-6 h-6'/>
         },
         {
            isShow: true,
            name: 'logout',
            path: '/logout',
            title: 'خروج',
            icon: <LogoutIcon className='w-6 h-6'/>
         }
      ];

      tempRoute = tempRoute.map((route: any, index: number) => {
         route.isShow = true;
         if (route.path === 1) {
            route.children = route.children
               .map((child: any) => {
                  if (child.children) {
                     child.children = child.children.filter((subChild: any) =>
                        Boolean(subChild.name)
                     );
                  }
                  return child.name ? child : null;
               })
               .filter(Boolean);
            if (open) {
               route.isOpen =
                  activeIndex === index
                     ? true
                     : pathname.startsWith(route.path);
            } else {
               route.isOpen = false;
            }
         }

         return route;
      });
      return [...tempRoute];
   }, [open, pathname, activeIndex]);

   const handleCategoryClick = (index: number) => {
      setActiveIndex((prevIndex: any) => (prevIndex === index ? null : index));
      setNestedOpen({});
   };

   const handleSubCategoryClick = (name: string) => {
      setNestedOpen((prevState) => ({
         ...prevState,
         [name]: !prevState[name]
      }));
   };

   return (
      <>
         <aside
            className={`fixed  right-0 h-screen bg-white overflow-y-auto overflow-x-hidden scroll z-50  ${
               open ? 'w-auto max-sm:w-full max-sm:px-4' : 'w-14'
            } 
        `}
         >
            <div className="w-56 max-sm:w-full flex items-center justify-between pt-8 px-2">
               <div className="flex">
                  <Logo className="h-10 w-10 inline" />
                  <div className="flex flex-col mr-3">
                     <span className="font-light text-[9px]">عصر داده های</span>
                     <p className="text-xl font-bold"> آسیاتک</p>
                  </div>
               </div>
            </div>
            <div
               className={`mt-2 mr-0.5 mx-2 flex items-center  text-white h-8 ${
                  open ? 'w-56 max-sm:w-full' : 'w-12 justify-center'
               }  px-2 bg-blue-900 rounded-3xl cursor-pointer`}
               onClick={() => {
                  setOpen(!open);
               }}
            >
               <FilledArrowIcon
                  className={`w-4 h-4 transition-transform  ${
                     open ? 'ml-2' : 'rotate-180'
                  }`}
               />
               {open && <span>بستن</span>}
            </div>
            <ul className="w-56 max-sm:w-full flex flex-col gap-1 justify-between pt-6 pl-2">
               {routes.map((route: any, index: number) => {
                  if (route.isShow) {
                     if (route.path !== 1) {
                        const isActive = pathname === route.path;
                        return (
                           <li
                              onClick={() => {
                                 handleCategoryClick(index);
                              }}
                              className={`${
                                 open ? ' w-auto' : 'w-[46px]'
                              } mr-1 rounded-14 py-2 pr-3  ${
                                 isActive
                                    ? 'bg-blue-100 flex justify-center'
                                    : ''
                              }`}
                              key={index}
                           >
                              <Link
                                 className={`w-full flex items-center font-bold ${
                                    isActive
                                       ? 'text-blue-900'
                                       : 'text-gray-600'
                                 }
                ${open ? 'justify-start' : 'justify-center'}
                  `}
                                 to={route.path}
                              >
                                 <p className="flex items-center justify-center">
                                    <span className={`${open ? '' : '-mr-2 '} ${isActive ? 'text-blue-400' : 'text-gray-600'}`}>
                                       {route.icon}
                                    </span>
                                    {open && (
                                       <span className="mr-8">
                                          {route.title}
                                       </span>
                                    )}
                                 </p>
                              </Link>
                           </li>
                        );
                     } else if (Array.isArray(route.children)) {
                        return (
                           <li
                              className={`w-full flex flex-col pr-2 font-bold cursor-pointer text-gray-600 transition-transform ${
                                 route.isOpen ? `${route.height}` : 'h-10 '
                              } overflow-hidden`}
                              key={index}
                           >
                              <div
                                 className={`w-full flex flex-row pr-2 py-2  rounded-14 
                      ${route.isOpen ? 'bg-blue-400 text-blue-800' : ''}
                      `}
                                 onClick={() => {
                                    handleCategoryClick(index);
                                 }}
                              >
                                 <div className="relative group">
                                    <div
                                       className={`${
                                          open ? '' : 'hover:text-blue-900'
                                       }`}
                                    >
                                       {route.icon}
                                    </div>
                                 </div>
                                 <div
                                    className={`flex justify-between items-center w-full`}
                                 >
                                    <p className="mr-8">{route.title}</p>
                                    <p>
                                       {route.isOpen ? (
                                          <StyledArrow className="w-4 h-4 rotate-180 transition-transform" />
                                       ) : (
                                          <StyledArrow className="w-4 h-4 transition-transform" />
                                       )}
                                    </p>
                                 </div>
                              </div>
                              <ul
                                 className={`${
                                    route.isOpen ? route.height : 'h-0'
                                 }`}
                              >
                                 {route?.children?.map(
                                    (child: any, childIndex: number) => {
                                       const isActiveChild =
                                          pathname.startsWith(child.path);
                                       return (
                                          <li key={childIndex}>
                                             <div
                                                className={`w-full flex items-center cursor-pointer my-2 py-2 rounded-[10px] ${
                                                   isActiveChild
                                                      ? 'text-blue-900'
                                                      : 'text-gray-600'
                                                }
                             ${
                                nestedOpen[child.name]
                                   ? 'bg-gray-100 text-blue-900'
                                   : ''
                             }
                              `}
                                                onClick={() => {
                                                   if (
                                                      child.children &&
                                                      child.children.length > 0
                                                   ) {
                                                      handleSubCategoryClick(
                                                         child.name
                                                      );
                                                   } else {
                                                      navigate(child.path);
                                                   }
                                                }}
                                             >
                                                <p className="w-full flex items-center justify-between pr-2">
                                                   <span className="text-sm mr-2.5">
                                                      {child.title}
                                                   </span>
                                                   <span>
                                                      {child.children &&
                                                         child.children.length >
                                                            0 && (
                                                            <StyledArrow
                                                               className={`w-4 h-4 ml-auto ${
                                                                  nestedOpen[
                                                                     child.name
                                                                  ]
                                                                     ? 'rotate-180'
                                                                     : ''
                                                               } transition-transform`}
                                                            />
                                                         )}
                                                   </span>
                                                </p>
                                             </div>

                                             {nestedOpen[child.name] &&
                                                Array.isArray(
                                                   child.children
                                                ) && (
                                                   <ul className="pr-2">
                                                      {child.children.map(
                                                         (
                                                            subChild: any,
                                                            subIndex: number
                                                         ) => {
                                                            const isActiveSubChild =
                                                               pathname ===
                                                               subChild.path;
                                                            return (
                                                               <li
                                                                  key={subIndex}
                                                                  className="pt-2 pr-5"
                                                               >
                                                                  <Link
                                                                     className={`w-full flex items-center ${
                                                                        isActiveSubChild
                                                                           ? 'text-blue-900'
                                                                           : 'text-gray-600'
                                                                     }`}
                                                                     to={
                                                                        subChild.path
                                                                     }
                                                                  >
                                                                     <span className="mr- text-sm">
                                                                        {
                                                                           subChild.title
                                                                        }
                                                                     </span>
                                                                  </Link>
                                                               </li>
                                                            );
                                                         }
                                                      )}
                                                   </ul>
                                                )}
                                          </li>
                                       );
                                    }
                                 )}
                              </ul>
                           </li>
                        );
                     }
                  }
               })}
            </ul>
         </aside>
      </>
   );
};
export default Sidebar;
