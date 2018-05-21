import { Provider, connect } from 'preact-redux';
import { h, render } from 'preact';
import Router from 'preact-router';
import './index.css';
import App from './App';
import Page2 from './Page2';
import store from './ducks/store';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

render(
	<Provider store={store}>
		<Router history={history}>
			<App path="/" history={history}/>
			<Page2 path="/2" history={history}/>
		</Router>
	</Provider>

	, document.getElementById('root'));
registerServiceWorker();
