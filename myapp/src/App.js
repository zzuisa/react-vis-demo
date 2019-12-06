import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import dataSource from './mork/datasource1.json'
import {XYPlot, LineSeries} from 'react-vis';
import ForceDirectedGraph from "./components/ForceDirectedGraph"
// react 路由
import {render} from 'react-dom';
// 引入一些 路由相关的组件
import { Router, Route, Link } from 'react-router'

class App extends Component {
 

  render() {
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];

    return (
      <div className="App">
        <XYPlot height={300} width={300}>
          <LineSeries data={data} />
        </XYPlot>
          </div>
    );
  }
}
export default App;