import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import 'bulma'


import Home from './components/Home'
import Register from './auth/Register'
import Login from './auth/Login'
import UsersIndex from './components/UsersIndex'
// import SecureRoute from './components/SecureRoute'

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Switch>
            <Route path="/users" component={UsersIndex}/>
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
