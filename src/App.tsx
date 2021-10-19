import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import CartProvider from "./providers/cart-provider";
import FilterProvider from "./providers/filter-provider";
import EditProvider from "./providers/edit-provider";

import CartView from "./views/cartView";
import CreateView from "./views/createView";
import EditView from "./views/editView";
import MainView from "./views/mainView";

import "./App.scss";

function App() {
  return (
    <Router>
      <CartProvider>
        <FilterProvider>
          <EditProvider>
            <Switch>
              <Route exact path="/">
                <Redirect to="/main" />
              </Route>
              <Route path="/main">
                <MainView />
              </Route>
              <Route path="/cart">
                <CartView />
              </Route>
              <Route path="/create">
                <CreateView />
              </Route>
              <Route path="/edit">
                <EditView />
              </Route>
            </Switch>
          </EditProvider>
        </FilterProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
