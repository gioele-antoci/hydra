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
import { Router, Route, browserHistory, hashHistory } from 'react-router';
// import routes from './utils/routes'
import Login from "./Login"
import Home from "./Home"

import restHelper from './restHelper';

import './css/App.css';

class App extends React.Component<any, { loggedIn: boolean }> {

  constructor(props) {
    super(props);
  }

  requireAuth(nextState, replace): boolean {
    //e.g.:https://github.com/ReactTraining/react-router/blob/master/examples/auth-flow/app.js
    if (!restHelper.isLoggedIn() && !restHelper.isSandbox()) {
      replace({
        pathname: "/",
        state: { nextPathname: nextState.location.pathname }
      });
      return null;
    }
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Login} />
        <Route path="/home" component={Home} onEnter={this.requireAuth} />
      </Router>
    )
  }
}

export default App;
