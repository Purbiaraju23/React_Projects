import { createContext, useContext } from "react";

export const TypeContext = createContext({
  productType: "all",
  setType: () => {},
});

export const TypeContextProvider = TypeContext.Provider;

export default function useType() {
  return useContext(TypeContext);
}
