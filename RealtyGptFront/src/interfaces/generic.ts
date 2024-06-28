import { ReactElement, ReactNode, ReactPortal } from 'react';

declare global {
  interface IPropsWithChildren {
    children?: ReactNode | ReactNode[] | ReactElement | ReactElement[] | ReactPortal | null;
  }
}
