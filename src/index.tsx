import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import {store} from './redux/state'
import "./styles/index.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const renderTree = () => {
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
store.subscribe(renderTree)
renderTree();
