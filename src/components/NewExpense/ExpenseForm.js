import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props) {
	const [setInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	});

	const userInputHadler = (e) => {
		setUserInput((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: setInput.enteredTitle,
			amount: setInput.enteredAmount,
			date: new Date(setInput.enteredDate),
		};
		props.onSaveExpenseData(expenseData);

		clearInputs();
	};

	const clearInputs = () => {
		setUserInput((prev) => ({
			enteredTitle: '',
			enteredAmount: '',
			enteredDate: '',
		}));
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						name='enteredTitle'
						onChange={userInputHadler}
						value={setInput.enteredTitle}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						name='enteredAmount'
						onChange={userInputHadler}
						value={setInput.enteredAmount}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2021-01-01'
						max='2023-12-31'
						name='enteredDate'
						onChange={userInputHadler}
						value={setInput.enteredDate}
					/>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	);
}

export default ExpenseForm;
