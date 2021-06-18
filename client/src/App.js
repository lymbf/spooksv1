import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Background from './View/background/background';
import Header from './View/header/header';
import HomeMain from './View/pages/home/homeMain';
import Play from './View/pages/play/play';

function App() {
	return (
		<div className="App">
			<Background />

			<Router>
				<Header />
				<Switch>
					<Route path="/play">
						<Play />
					</Route>
					<Route path="/">
						<HomeMain />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
