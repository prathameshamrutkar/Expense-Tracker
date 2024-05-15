import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <SpeechProvider appId='c48b327a-22ec-4aa1-a6e8-548eb59cbb34' language="en-US">
        <Provider>
            <Router>
                <App />
            </Router>
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);

// 7c4aee08-1073-4a32-b862-ebe1850e0732
