import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

export default class Favorites extends Component {

  renderBeys = () => {
    return this.props.favBeys.map(beyObj => <BeyCard clickHandler={this.props.clickHandler}  key={beyObj.id} bey={beyObj}/>)
  }

  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderBeys()}
      </div>
    );
  }
}
