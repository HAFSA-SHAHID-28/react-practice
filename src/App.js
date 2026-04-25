import React, { Component } from "react";
import Main from "./components/routing2/Main";
// import Main from "./projectTest/routingDetailPage/Main";
// import Main from "./components/routing/Main";
// import Test from './projectTest/stateToggle/Test';
// import Test2 from './projectTest/stateToggle/Test2';
// import Main from './components/hooks/Main';
// import Main from './components/props/Main';
// import Task from './projectTest/differentStylingProp/Task';
// import Gallery from './components/styleClass/gallery/Gallery';
// import Gallery2 from './components/styleClass/gallery/Gallery2';
// import Header from './components/styleClass/header/Header';
// import Style from './components/styleClass/style/Style';
// import Main from './projectTest/mapList/easy/Main';
// import Main from './projectTest/mapList/medium/Main';
// import Main from './components/props/Main';
// import Main from './components/hooks/Main';
// import Test from './projectTest/useEffectTest/Test';

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
      {/* <Main/>  ------------- medium */}
      {/* <Main/> ---------------  easy */}
      {/* <Main/> ----------- props */}
      {/* <Task/>  ----------  props btn task */}
      {/* <Style/> */}
      {/* <Main/> */}
      {/*<Main />  ---------- state */}
      {/* <Test /> */}
      {/* <Test2/> --------  usestate test */}
      {/* <Header/> */}
      {/* <Gallery2/> */}
      {/* <Gallery/> */}
      {/* <Test/> ------------  use effect test1 */}
      {/* <Main />  --------  routing */}
      {/* <Main/>  --------------    routing practice detail page */}
      <Main />  {/* -------------------------   routing 2*/}
    </>
  );
}

export default App;
