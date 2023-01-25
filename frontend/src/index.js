import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Define root container
const rootContainer = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(rootContainer);

//initial render
root.render (<App/>);
