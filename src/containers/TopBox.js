import React, {Component} from 'react';
import TopList from '../components/TopList.js'

class TopBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
    .then((res) => res.json())
    .then ((items) => {
      this.setState({items: items});
    })
  }

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
