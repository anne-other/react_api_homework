import React, {Component} from 'react';
import TopList from '../components/TopList.js'

class TopBox extends Component {
  render() {
    return (
      <div>
        <h1>Top 20</h1>
        <TopList/>
      </div>
    )
  }
}

export default TopBox
