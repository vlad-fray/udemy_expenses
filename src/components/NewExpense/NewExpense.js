import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.floor(Math.random() * 10000).toString(),
		};
		props.addExpenseHandler(expenseData);
	};
	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
}

export default NewExpense;
