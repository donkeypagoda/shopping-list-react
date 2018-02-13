import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoppingList from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ShoppingList name="Dude" />, document.getElementById('root'));
registerServiceWorker();
