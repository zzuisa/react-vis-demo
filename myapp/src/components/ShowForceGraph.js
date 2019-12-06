  
import React from 'react'
import ForceDirectedGraph from './ForceDirectedGraph'
import dataSource from '../mork/datasource1.json'
class About extends React.Component{
    state = {
        strength: Math.random() * 60 - 30
      };
    render(){
        const {strength} = this.state;

        return (
            <div className="force-directed-example">
            <button
              className="showcase-button"
              onClick={() => this.setState({strength: Math.random() * 60 - 30})}
            >
              {' '}
              REWEIGHT{' '}
            </button>
            <ForceDirectedGraph
            data={dataSource}
            height={500}
            width={500}
            animation
            strength={strength}
          />
          </div>  
        )
    }
}

export default About