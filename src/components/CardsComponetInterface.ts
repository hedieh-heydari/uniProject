import { ReactNode } from 'react';

export interface ICardsComponent {
   categoryName: string;
   amount?: ReactNode;
   icon: ReactNode;
   EditFunction?: React.MouseEventHandler<
      HTMLButtonElement | HTMLAnchorElement
   >;
}
