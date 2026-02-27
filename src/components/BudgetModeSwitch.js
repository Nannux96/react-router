import { useBudget } from "@/contexts/BudgetContext";
export default function BudgetModeSwitch(props) {
  const { budgetMode, toggleBudgetMode } = useBudget();

  return <a onClick={toggleBudgetMode}>{budgetMode ? "Disattiva modalità budget" : "Attiva modalità budget"}</a>
}