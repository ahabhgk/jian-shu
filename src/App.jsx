import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'

const App = () => (
  <Provider store={store}>
    <Header />
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  </Provider>
)

export default App
