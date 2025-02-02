export interface IDeleteDepositModal {
   open: boolean;
   setOpen: Function;
   deleteHandler: Function;
   selectedData: IDeposit | undefined;
}

export interface IUpsertDepositModal {
   open: boolean;
   setOpen: Function;
   selectedData: IDeposit | undefined;
   setSelectedData: Function;
   editHandler: Function;
   addHandler: Function;
   IncomeSelect: any;
   boxesSelect: any;
}

export interface IDeposit {
   _id?: string;
   amount: number;
   date: null | string;
   fromBox: string;
   toBox: string;
   description: string;
}
