import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
	const filteredExpensesItems = props.filteredExpenses.map((exp) => {
		return (
			<ExpenseItem
				key={exp.id}
				date={exp.date}
				title={exp.title}
				amount={exp.amount}
			/>
		);
	});

	return (
		<ul className='expenses-list'>
			{filteredExpensesItems.length === 0 && (
				<p className='expenses-list__fallback'>No expenses found</p>
			)}
			{filteredExpensesItems}
		</ul>
	);
}

export default ExpensesList;
