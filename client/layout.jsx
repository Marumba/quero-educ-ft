import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import { Theme } from '@themes/default/style';
import Routes from './router';
import store from './store';

ReactDOM.render(
	(
		<Provider store={store}>
			<ThemeProvider theme={Theme}>
				<Routes />
			</ThemeProvider>
		</Provider>
	),
	document.getElementById('app')
);
