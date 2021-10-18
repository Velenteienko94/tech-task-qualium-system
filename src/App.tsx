import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import CartProvider from "./providers/cart-provider";
import FilterProvider from "./providers/filter-provider";
import { CartView, CreateView, EditView, MainView } from "./views";

function App() {
  // const servResp: any = [];
  // const response = async () => {
  //   fetch("http://localhost:8000/products")
  //     .then((resp) => resp.json())
  //     .catch((err) => console.log("Error", err))
  //     .then((res) => servResp.push(res));
  // };
  // console.log(servResp);
  // console.log(response);

  // const [responseData, setResponseData] = useState([]);

  // useEffect(() => {
  //   const frtchDataFromServer = () => {
  //     fetch("http://localhost:8000/products").then((response) =>
  //       response.json().then((data) => setResponseData(data))
  //     );
  //   };
  //   frtchDataFromServer();
  // }, []);

  return (
    <Router>
      <CartProvider>
        <FilterProvider>
          <Switch>
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
        </FilterProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
