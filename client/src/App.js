import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combinedReducers } from './Controller/redux';

import Background from './View/background/background';
import Header from './View/header/header';
import HomeMain from './View/pages/home/homeMain';
import Play from './View/pages/play/play';
import Game from './View/game/game';

function App() {
	// Redux Store Setup
	let store = createStore(
		combinedReducers,
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return (
		<div className="App">
			<Background />
			<Provider store={store}>
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
			</Provider>
		</div>
	);
}

export default App;
