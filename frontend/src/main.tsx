import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

import { store } from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
);
