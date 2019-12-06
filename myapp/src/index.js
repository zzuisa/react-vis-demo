import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';
import './index.css';
import App from './App';
import Heatmap from './components/Heatmap';
import ShowForceGraph from './components/ShowForceGraph';
import Scannerplot from './components/Scannerplot';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default class Hello extends Component{
    render(){
        return (
            <Router> 
                <div className="container">
                <Jumbotron fluid>
                    <Container>
                        <h1>React-vis test</h1>
                        <p>
                        This is just a demo of React-vis Component!
                        </p>
                    </Container>
                    </Jumbotron>
                    <ul className="nav">
            　　　　　　<li><Link to="/" className="btn btn-outline-success btn-sm">App</Link></li>
            　　　　　　<li><Link to="/ShowForceGraph" className="btn btn-outline-success btn-sm">ForceDirectedGraph</Link></li>
            　　　　　　<li><Link to="/Heatmap" className="btn btn-outline-success btn-sm">Heatmap</Link></li>
            　　　　　　<li><Link to="/Scannerplot" className="btn btn-outline-success btn-sm">Scannerplot</Link></li>
        　　 　　　　</ul>
                    <hr />
                    <div className="con">
                    <Route exact path="/" component={App} />
                    <Route path="/ShowForceGraph" component={ShowForceGraph} />
                    <Route path="/Heatmap" component={Heatmap} />
                    <Route path="/Scannerplot" component={Scannerplot} />
              
                    </div>
                    
                </div>
            </Router>
        )
    }
}
ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
