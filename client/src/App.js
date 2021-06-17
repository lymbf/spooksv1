import './App.css';

import Background from './View/background/background';
import Header from './View/header/header';
import HomeMain from './View/pages/home/homeMain';

function App() {
	return (
		<div className="App">
			<Background />
			<Header />
			<HomeMain />
		</div>
	);
}

export default App;
