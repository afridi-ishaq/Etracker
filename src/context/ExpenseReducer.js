const ExpenseReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TRANSACTION":
			return { ...state, transactions: [action.payload, ...state.transactions] };
		case "REMOVE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter((t) => t.id !== action.payload),
			};
		default:
			return state;
	}
};

export default ExpenseReducer;
