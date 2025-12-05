import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const initialState = {
	transactions: [],
};

export const ExpenseContext = createContext(initialState);

export const ExpenseProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ExpenseReducer, initialState);

	return (
		<ExpenseContext.Provider value={{ state, dispatch }}>
			{children}
		</ExpenseContext.Provider>
	);
};

export default ExpenseProvider;
