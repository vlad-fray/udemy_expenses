import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
	return (
		<Card className='expenses'>
			{props.expenses.map((exp) => {
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
