import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
	const [isActiveForm, setIsActiveForm] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.floor(Math.random() * 10000).toString(),
		};
		props.addExpenseHandler(expenseData);
	};

	const toggleIsActiveHandler = () => {
		setIsActiveForm((prev) => !prev);
	};

	return (
		<div className='new-expense'>
			{!isActiveForm && (
				<ExpenseForm
					onChangeIsActive={toggleIsActiveHandler}
					onSaveExpenseData={saveExpenseDataHandler}
				/>
			)}
			{isActiveForm && (
				<button type='button' onClick={toggleIsActiveHandler}>
					Add New Expense
				</button>
			)}
		</div>
	);
}

export default NewExpense;
