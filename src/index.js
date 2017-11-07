import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './vendor/normalize.scss'
import './vendor/reset.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
