import React from "react";
import "./App.css";
import beyArray from './api.js'
import BeyContainer from './Containers/BeyContainer.js'
import Favorites from './Containers/Favorites.js'


// const App = () => {

//   return (
//     <div className="container" >
//       <BeyContainer beys={beyArray} />
//       <Favorites favBeys={beyArray.filter(bey => bey.favorite)}/>
//     </div>
//   );
// };

class App extends React.Component {

  

  render() {
    return (
      <div className="container" >
        <BeyContainer beys={beyArray} />
        <Favorites favBeys={beyArray.filter(bey => bey.favorite)}/>
      </div>
    );
  }
};



export default App;