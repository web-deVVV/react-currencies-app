import { Provider } from 'react-redux'
import store from 'store'
import { HashRouter, Switch, Route } from 'react-router-dom'
import MainTemplate from 'templates/MainTemplate'
import Home from 'views/Home'
import Favourites from 'views/Favourites'

const Root = () => (
  <Provider store={store}>
    <HashRouter basename="/">
      <MainTemplate>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/favourites"
            component={Favourites}
          />
        </Switch>
      </MainTemplate>
    </HashRouter>
  </Provider>
)

export default Root
