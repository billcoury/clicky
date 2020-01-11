import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// entry point is index.js, which renders App.js in the #root div
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
