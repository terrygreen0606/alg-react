import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
	<App />,

	// Disabled StrictMode as React Material UI still uses deprecated findDomNode function
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>,
	document.getElementById('root')
);
