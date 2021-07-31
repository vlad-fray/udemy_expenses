import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
	const expenses = [
		{
			id: 'e1',
			date: new Date(2021, 2, 21).toISOString(),
			title: 'Car Insurance',
			amount: '294.67',
		},
		{
			id: 'e2',
			date: new Date(2021, 2, 22).toISOString(),
			title: 'Car Insurance',
			amount: '294.67',
		},
	];
	return (
		<div className='App'>
			<h2>Hey</h2>
			<ExpenseItem
				date={expenses[0].date}
				title={expenses[0].title}
				amount={expenses[0].amount}
			/>
			<ExpenseItem
				date={expenses[1].date}
				title={expenses[1].title}
				amount={expenses[1].amount}
			/>
		</div>
	);
}

export default App;
