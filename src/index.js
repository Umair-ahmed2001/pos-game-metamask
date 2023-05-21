import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Web3 from 'web3'
import {BrowserRouter as Router} from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core'
import { MetaMaskProvider } from './hooks/useMetamask';

import 'bootstrap/dist/css/bootstrap.min.css';

const getLibrary = (provider, connector) => {
  return new Web3(provider)
}

ReactDOM.render(
  <Router>
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <App />
      </MetaMaskProvider>
    </Web3ReactProvider>
  </Router>,
  document.getElementById('root')
);


