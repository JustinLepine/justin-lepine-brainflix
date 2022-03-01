import "./App.scss";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home";
import Uploads from "./pages/Upload/Upload";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/uploads" component={Uploads} />
          <Route path="/:id" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }


export default App;