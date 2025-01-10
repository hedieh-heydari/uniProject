import { ReactNode } from 'react';

export interface ICardsComponent {
   categoryName: string;
   amount?: ReactNode;
   icon: ReactNode;
   editFunction?: React.MouseEventHandler<
      HTMLButtonElement | HTMLAnchorElement
   >;
}
