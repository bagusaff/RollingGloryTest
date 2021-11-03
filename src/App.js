import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductLists from "./pages/ProductLists";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductLists} />
        <Route exact path="/product/:id" component={ProductDetail} />
      </Switch>
    </Router>
  );
};

export default App;
