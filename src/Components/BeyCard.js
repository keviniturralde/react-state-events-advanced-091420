import React from "react";

class BeyCard extends React.Component {

  favClickHandler = () => {
    this.props.clickHandler(this.props.bey, this.props.parent)
    if(this.props.bey.favorite && this.props.parent === 'favs') {
      window.alert("I got a hot sauce in my bag, swag")
    }
  }

  render() {
      return (
      <div className="card">
        <h2>{this.props.bey.name}</h2>
        <img onClick={this.favClickHandler} alt="bey" src={this.props.bey.img}/>
      </div>
    );
  } 
};

export default BeyCard;
