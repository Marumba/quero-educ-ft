import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import routeConfig from './routes';

export default (props) => {
	const renderMergedProps = (component, ...rest) => {
		const finalProps = Object.assign({}, ...rest);
		return React.createElement(component, finalProps);
	};

	const PropsRoute = ({ component, ...rest }) => {
		return (
			<Route
				{...rest}
				render={routeProps => {
					return renderMergedProps(component, routeProps, rest);
				}}
			/>
		);
	};

	return (
		<Router>
			<Switch>
				{routeConfig.map((route, i) => (
					<PropsRoute key={i} {...route} {...props} />
				))}
			</Switch>
		</Router>
	);
};
