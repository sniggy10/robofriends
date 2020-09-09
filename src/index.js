import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>,
  // <h1>Hello</h1>,
  // <Hello greeting={'Hi Snigdha'}/>,
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
