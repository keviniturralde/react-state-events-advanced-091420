import React from "react";
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {

  renderBeys = () => {
    return this.props.beys.map(beyObj => <BeyCard parent="index" key={beyObj.id} clickHandler={this.props.clickHandler} bey={beyObj}/>)
  }
  
  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBeys()}
      </div>
    );
  }
}

export default BeyContainer;
