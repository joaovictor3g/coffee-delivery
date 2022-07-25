import { Cart } from "@/@types";
import { get, set } from "@/utils/localStorage";
import { createContext, ReactNode, useEffect, useState } from "react";
import produce from "immer";

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextData {
  data: Cart[];
  onAdd(item: Cart): void;
  onRemove(item: Cart): void;
}

const KEY = "@coffee-delivery";

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [data, setData] = useState<Cart[]>([]);

  function onAdd(cartItem: Cart) {
    setData(
      produce((draft) => {
        const alreadyExists = draft.find((d) => d.id === cartItem.id);
        if (alreadyExists) {
          alreadyExists.amount += cartItem.amount;
        } else {
          draft.push(cartItem);
        }
        set(KEY, draft);
      })
    );
  }

  function onRemove(cartItem: Cart) {
    const newData = data.filter((d) => d.id !== cartItem.id);
    setData(newData);
    set(KEY, newData);
  }

  function isZeroAmount(cartItem: Cart) {
    const nonZeroData =
      (data.find((d) => d.id === cartItem.id)?.amount ?? 0) <= 0;
    return nonZeroData;
  }

  useEffect(() => {
    const localStorageData = get<Cart[]>(KEY);
    setData(localStorageData);
  }, []);

  return (
    <CartContext.Provider value={{ data, onAdd, onRemove }}>
      {children}
    </CartContext.Provider>
  );
}
