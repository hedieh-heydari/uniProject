import CalendarIcon from '../assets/icons/CalendarIcon';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import DatePick, { DateObject } from 'react-multi-date-picker';

interface IDatePicker {
   wrapperClassName?: string;
   value: string;
   onChange?:
      | (((selectedDates: DateObject | DateObject[] | null) => false | void) &
           ((
              selectedDates: DateObject | DateObject[] | null,
              validatedValue: string | string[],
              input: HTMLElement,
              isTyping: boolean
           ) => false | void))
      | undefined;
   className?: string;
   placeHolder?: string;
   onFocusedDateChange?: any;
   onlyYearPicker?: any;
   onlyMonthPicker?: any;
   format?: any;
   portal?: boolean;
   disabled?:boolean;
}
export default function DatePickerComponent({
   value,
   onChange,
   wrapperClassName,
   className,
   placeHolder,
   onFocusedDateChange,
   onlyYearPicker,
   onlyMonthPicker,
   format,
   portal = true,
   disabled = false,
   
}: IDatePicker) {
   const today = new DateObject({ calendar: persian, locale: persian_fa });
   return (
      <>
         <div
            className={`w-full h-10 flex items-center rounded-14 placeholder:font-normal border border-solid border-gray-200 text-gray-800 mt-2 ${
               wrapperClassName && wrapperClassName
            }`}
         >
            <DatePick
               format={format}
               onlyMonthPicker={onlyMonthPicker}
               onlyYearPicker={onlyYearPicker}
               portal={portal}
               className={className}
               placeholder={placeHolder ? placeHolder : today.format()}
               value={value}
               onChange={onChange}
               onFocusedDateChange={onFocusedDateChange}
               calendar={persian}
               locale={persian_fa}
               disabled={disabled}
               inputClass=" w-full h-full cursor-pointer bg-transparent focus:outline-none px-2 placeholder:text-sm placeholder:text-gray-600"
            />
            <CalendarIcon className="w-6 h-6 ml-2 stroke-gray-600 " />
         </div>
         <style>
            {`
            .rmdp-container{
               width:100%;
               height: 100% !important;
            } 
            .rmdp-container .rmdp-wrapper{
               border-radius:10px;
               box-shadow: 0px 4px 32px rgba(19, 26, 41, 0.1);
               
            }
            .rmdp-container .rmdp-wrapper .rmdp-week-day{
               color:#8399AB;
            }
            .rmdp-container .rmdp-wrapper .rmdp-arrow-container{
               border-color : #5E768A;
            }
            .rmdp-container .rmdp-wrapper .rmdp-arrow-container:hover .rmdp-arrow {
               border: solid #5E768A;
               border-width: 0 2px 2px 0;
            }
            .rmdp-arrow {
               border: solid #5E768A;
               border-width: 0 2px 2px 0;
               display: inline-block;
               height: 3px;
               margin-top: 5px;
               padding: 2px;
               width: 3px;
           }
            .rmdp-container .rmdp-wrapper .rmdp-arrow-container:hover {
               background-color: unset;
                box-shadow: unset;
               }
            .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover {
                  background-color: #7ea6f0;
                  color: #fff;
              }
              .rmdp-day.rmdp-today span {
               background-color: #fff;
               color: #000;
           }
           .rmdp-day.rmdp-selected span:not(.highlight) {
            background-color: #2DAAE1;
            box-shadow: unset;
            }

            .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover {
               background-color: #CBEAF8;
               color: #000;
           }
            `}
         </style>
      </>
   );
}
