import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './vendor/normailize.css'
import './vendor/reset.css'
import './global.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
