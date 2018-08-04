import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     const greeting = "Hi, Tom!"
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <h1>Hi!</h1>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
