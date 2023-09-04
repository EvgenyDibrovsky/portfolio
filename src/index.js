import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import Cookies from 'components/Cookies/Cookies';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cookies>
      <App />
    </Cookies>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
