import ReactDOM from 'react-dom'
import App from './App.jsx'
import './src/components/styles/index.css'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router><App/></Router>, document.querySelector('#root')
);
