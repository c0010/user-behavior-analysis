import React, { Component } from 'react';
import './App.less';
import _ from 'lodash'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newArr = _.chunk(arr)
console.log(newArr)

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
