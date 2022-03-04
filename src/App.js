import "./App.scss";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home";
import Uploads from "./pages/Upload/Upload";
import { BrowserRouter, Route, Switch } from "react-router-dom";


// "api_key": "e19b596e-2655-4a4f-9242-e96ab392744b"

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