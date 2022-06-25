import { useReducer, useContext, createContext } from "react";

const CreatedContext = createContext();

export const DataWrapper = ({ initialState, children, reducer }) => (
  <CreatedContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CreatedContext.Provider>
);

export const DataBucket = () => useContext(CreatedContext);
