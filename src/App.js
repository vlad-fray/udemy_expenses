import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {
	const expenses = [
		{
			id: 'e1',
			date: new Date(2021, 2, 21),
			title: 'Car Insurance',
			amount: '294.67',
		},
		{
			id: 'e2',
			date: new Date(2021, 2, 22),
			title: 'Car Insurance',
			amount: '294.67',
		},
	];
	return (
		<div className='App'>
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
