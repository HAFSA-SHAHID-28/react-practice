import React, { Component } from 'react';
import Gallery from './components/styleClass/gallery/Gallery';
import Gallery2 from './components/styleClass/gallery/Gallery2';
import Header from './components/styleClass/header/Header';
import Style from './components/styleClass/style/Style';
import Main from './components/props/Main';


// CLASS COMPONENTS EXAMPLE

// //////////////////   Component 1
// class Greeting extends Component {
//   render() {
//     return <h1>Hello, {this.props.name}!</h1>;
//   }
// }

// export default Greeting;


// //////////////////   Component 2
// class Hafsa extends Component {
// constructor(prop) { super(prop) }

//   render() {
//     return(
//        <React.Fragment>  {/* eske lia pehle react import hoga uper, */}
//       <h1>My Class Component</h1>
//       <p>mene ye aik class component banaya h!</p>
//       </React.Fragment>
//     )
//   }
// }


// export default Hafsa;


function App() {
  return (
  <>

    <Main/>

    
    {/* <Style/> */}


    <hr/>
    <br/>

    {/* <Header/>

    <hr/>
    <br/>

    <Gallery2/>

    <hr/>
    <br/>
    
    <Gallery/> */}
    
    
  </>
  );
}

export default App;
