import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Background from './View/background/background';
import Header from './View/header/header';
import HomeMain from './View/pages/home/homeMain';
import Play from './View/pages/play/play';
import Game from './View/game/game';

function App() {
	return (
		<div className="App">
			<Background />

			<Router>
				<Switch>
					<Route path="/game">
						<Game />
					</Route>
					<Route path="/">
						<Header />
						<Switch>
							<Route path="/play">
								<Play />
							</Route>
							<Route path="/">
								<HomeMain />
							</Route>
						</Switch>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
