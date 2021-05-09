import React from 'react';
import axios from 'axios';

class App extends React.Component {
  // //////////////// 3
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: []
    }
  }

  // //////////////////// 2
  getShoppingList = async () => {
    // const API = 'http://localhost:3001'; 
    const serverLink = process.env.REACT_APP_SERVER; // it should start with REACT_APP_?? as a prefix

    const shoppingList = await axios.get(`${serverLink}/shoppingList`); //npm i axios and import it fo2
    this.setState({ shoppingList: shoppingList.data });

    // Error cors: so go to server.js & add cors()
  }

  render() {
    return (
      <>
        {/* /////////////////// 1 */}
        <button onClick={this.getShoppingList}>Get Shopping List</button>

        {/* //////////////////// 4 */}
        {this.state.shoppingList.map((item, idx) => (
          <div key={idx}>
            {item}
          </div>
        ))}

        {/* /////////////////// 5
        let's try to get data from a third-api server
        lab solution-weather */}
        <button onClick={this.getLocationData}>Get Location Data</button>

        {/* //////////////////// 6 */}
        {this.state.shoppingList.map((item, idx) => (
          <div key={idx}>
            {item}
          </div>
        ))}
      </>
    )
  }
}

export default App;