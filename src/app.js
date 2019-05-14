import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './auth/Register'
import Login from './auth/Login'

import UserShow from './components/UserShow'
import UserIndex from './components/UserIndex'
import MatchIndex from './components/MatchIndex'
import UserEdit from './components/UserEdit'

import 'bulma'
import './style.scss'

// import Login from './components/Login'
// import SecureRoute from './components/SecureRoute'

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/users/:id/matches" component={MatchIndex}/>
            <Route path="/users/:id/edit" component={UserEdit}/>
            <Route path="/users/:id" component={UserShow}/>
            <Route path="/users" component={UserIndex}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
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
