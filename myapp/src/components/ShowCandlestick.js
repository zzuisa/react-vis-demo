import React from 'react';
import {XAxis, YAxis, LineSeries, FlexibleWidthXYPlot} from 'react-vis';
import Candlestick from './candlestick';

import './candlestick.scss';

/**
 * Generate random random for candle stick chart
 * @param {number} total - Total number of values.
 * @returns {Array} Array of data.
 */
function buildRandomBinnedData(total) {
  const result = Array(total)
    .fill(0)
    .map((x, i) => {
      const values = [
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random()
      ]
        .sort()
        .map(d => Math.floor(d * 100));
      const y = (values[2] + values[1]) / 2;
      return {
        x: i,
        y,
        yHigh: values[3],
        yOpen: values[2],
        yClose: values[1],
        yLow: values[0],
        color: y < 25 ? '#EF5D28' : '#12939A',
        opacity: y > 75 ? 0.7 : 1
      };
    });
  return result;
}

export default class CandlestickExample extends React.Component {
  state = {
    data: buildRandomBinnedData(30)
  };

  render() {
    const {data} = this.state;
    return (
      <div className="ShowCandlestick">
        <div className="chart">
          <FlexibleWidthXYPlot animation yDomain={[0, 100]} height={300}>
            <XAxis />
            <YAxis />
            <LineSeries color="#12939A" data={data} />
            <LineSeries
              color="#FF9833"
              className="dashed-example-line"
              data={[{x: 0, y: 25}, {x: 30, y: 25}]}
            />
            <LineSeries
              color="#1A3177"
              className="dashed-example-line"
              opacity={0.3}
              data={[{x: 0, y: 75}, {x: 30, y: 75}]}
            />
            <Candlestick
              colorType="literal"
              opacityType="literal"
              stroke="#79C7E3"
              data={data}
            />
          </FlexibleWidthXYPlot>
        </div>
      </div>
    );
  }
}