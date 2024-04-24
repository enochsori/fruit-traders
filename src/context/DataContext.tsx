import { createContext, useContext, useState } from 'react';
import { ItemDetail } from '../types/types';
import { items } from '../data';

type Props = {
  children: JSX.Element[];
};

type DataContextValue = {
  itemList: ItemDetail[];
};

export const DataContext = createContext<DataContextValue | null>(null);

export default function DataContextProvider({ children }: Props) {
  const [itemList] = useState<ItemDetail[]>(items);

  return (
    <DataContext.Provider value={{ itemList }}>{children}</DataContext.Provider>
  );
}

// custom hook for context usability
// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => {
  const data = useContext(DataContext);
  if (!data) throw new Error('DataContextProvider not found');
  return data;
};
