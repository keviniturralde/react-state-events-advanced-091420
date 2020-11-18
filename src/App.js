import React from "react";
import "./App.css";
import beyArray from './api.js'
import BeyContainer from './Containers/BeyContainer.js'
import Favorites from './Containers/Favorites.js'

class App extends React.Component {
  
  state = {
    api: beyArray 
  }

  clickHandler = (beyObj, parent) => {
      if (parent === 'index' && beyObj.favorite) {
        console.log("already favorited!")
      } else {
        this.setState( previousState => {
          const matchedBey = previousState.api.find(bey => beyObj.id === bey.id)
          matchedBey.favorite = !matchedBey.favorite
          return previousState
        })
      } 
  }

  render() {
    return (
      <div className="container" >
        <BeyContainer clickHandler={this.clickHandler} beys={this.state.api} />
        <Favorites clickHandler={this.clickHandler} favBeys={this.state.api.filter(bey => bey.favorite)}/>
      </div>
    );
  }
};



export default App;