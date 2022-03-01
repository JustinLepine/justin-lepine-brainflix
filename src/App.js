import "./App.scss";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home";
import Uploads from "./pages/Upload/Upload";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";


  // JSON data import

function App() {

    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/uploads" component={Uploads} />
          <Route component={NotFound} />          
        </Switch>
      </BrowserRouter>
    )
  }


export default App;