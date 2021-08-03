import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const state = {
	expenses: [
		{
			id: 'e1',
			date: new Date(2021, 5, 17),
			title: 'Car Insurance',
			amount: '294.67',
		},
		{
			id: 'e2',
			date: new Date(2022, 2, 22),
			title: 'Taxes',
			amount: '34.70',
		},
	],
};

function App() {
	const [expenses, setExpenses] = useState(state.expenses);

	const addExpenseHandler = (expense) => {
		setExpenses((exps) => [expense, ...exps]);
	};

	return (
		<div className='App'>
			<NewExpense addExpenseHandler={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
