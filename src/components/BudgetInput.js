import { useBudget } from "@/contexts/BudgetContext";
export default function BudgetModeSwitch(props) {
  const { budgetMode, budgetValue, setBudgetValue } = useBudget();

  if(!budgetMode) return null;
  return <input type="number" value={budgetValue} onChange={(e) => setBudgetValue(e.target.value)}/>
}