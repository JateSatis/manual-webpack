import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './data/components/Menu.js'
import data from './data/recipes.json'

ReactDOM.render(<Menu data={data} />, document.getElementById("root"))