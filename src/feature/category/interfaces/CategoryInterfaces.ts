export interface IUpsertBoxesModal {
   open: boolean;
   setOpen: Function;
   selectedData:IIncomeList | undefined;
   setData:Function,
   addHandler:Function,
   editHandler:Function,
}

export interface IUpsertCategoryModal {
   open: boolean;
   setOpen: Function;
   type: string;
   selectedData:IIncomeList | undefined;
   setData:Function
   addHandler:Function,
   editHandler:Function
}
export interface IIncomeList {
   _id: string;
   title: string;
   logo: any;
   createdAt: string;
   updatedAt: string;
   __v: number;
   initialAmount?:string
}
