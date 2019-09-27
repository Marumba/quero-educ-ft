import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './ducks';

const headers = {
	backPage: null,
	externalLink: false,
	transparent: true,
	noBorder: false
};

let middleware;
if (config.showLog) middleware = applyMiddleware(thunk.withExtraArgument(headers), createLogger());
else middleware = applyMiddleware(thunk.withExtraArgument(headers));

export default createStore(combineReducers(reducer), middleware);
