import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'
import UsersIndex from './components/UsersIndex'

import './style.scss'
import 'bulma'
// import Login from './components/Login'
// import SecureRoute from './components/SecureRoute'

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/users" component={UsersIndex}/>
            <Route path="/register" component={Register}/>
            <Route path="/" component={Home}/>
          </Switch>
        </main>
      </Router>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
