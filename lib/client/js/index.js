import FooComponent from './components/FooComponent.jsx';
import React from 'https://dev.jspm.io/react';
import ReactDOM from 'https://dev.jspm.io/react-dom';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(FooComponent),
    document.querySelector('#react-app')
  );
});