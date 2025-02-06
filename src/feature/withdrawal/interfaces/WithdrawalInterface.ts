export interface IDeleteWithdrawalModal {
   open: boolean;
   setOpen: Function;
   deleteHandler: Function;
   selectedData: IWithdrawal | undefined;
   disableBtn :boolean
}

export interface IUpsertWithdrawalModal {
   open: boolean;
   setOpen: Function;
   selectedData: IWithdrawal | undefined;
   setSelectedData: Function;
   editHandler: Function;
   addHandler: Function;
   outgoSelect: any;
   boxesSelect: any;
   disableBtn: boolean
}

export interface IWithdrawal {
   _id?: string;
   amount: number;
   date: null | string;
   fromBox: string;
   toBox: string;
   description: string;
}
