import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
	const [currentYear, setCurrentYear] = useState('2022');

	const setFilteredYear = (newYear) => {
		setCurrentYear(newYear);
	};

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={currentYear}
				setFilteredYear={setFilteredYear}
			/>
			{props.expenses
				.filter((exp) => exp.date.getFullYear() === +currentYear)

				.map((exp) => {
					return (
						<ExpenseItem
							key={exp.id}
							date={exp.date}
							title={exp.title}
							amount={exp.amount}
						/>
					);
				})}
		</Card>
	);
}

export default Expenses;
