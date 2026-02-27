import { createContext, useContext, useState } from "react";

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {

	// const defaultBudget = {
	// 	budgetMode: true
	// };

	const [budgetMode, setBudgetMode] = useState(true);
	const [budgetValue, setBudgetValue] = useState("");

	function toggleBudgetMode() {
		setBudgetMode(!budgetMode)
	}

	const budget = { budgetMode, setBudgetMode, toggleBudgetMode, budgetValue, setBudgetValue  };

	return <BudgetContext.Provider value={budget}>
		{children}
	</BudgetContext.Provider>
}

function useBudget() {
	return useContext(BudgetContext);
}

export { BudgetProvider, useBudget };
