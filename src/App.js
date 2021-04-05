import './css/style.css'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {Header, Footer} from "./Component"
import {Home} from "./Container"

function App() {
  return (
    <div >
      <Router>
                <Header />
                  <Switch>
                    <Route exact path="/" component={Home} />
                  </Switch>
                <Footer />
            </Router>
    </div>
  );
}

export default App;
