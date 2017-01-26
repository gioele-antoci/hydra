// import * as React from 'react';

// const logo = require('./logo.svg');

// class App extends React.Component<null, null> {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to Hydra!</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import routes from './utils/routes'
import Login from "./Login"
import Home from "./Home"

import './css/App.css';

class App extends React.Component<any, { loggedIn: boolean }> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="login" component={Login} />
        <Route path="/" component={Home} />
      </Router>
    )
  }
}

export default App;
