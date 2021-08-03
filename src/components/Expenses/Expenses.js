import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
	const [currentYear, setCurrentYear] = useState('2022');

	const setFilteredYear = (newYear) => {
		setCurrentYear(newYear);
	};

	const filteredExpenses = props.expenses.filter(
		(exp) => exp.date.getFullYear() === +currentYear
	);

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={currentYear}
				setFilteredYear={setFilteredYear}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList filteredExpenses={filteredExpenses} />
		</Card>
	);
}

export default Expenses;
