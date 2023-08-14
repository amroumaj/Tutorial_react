import logo from './logo.svg';
import NavBar from './navBar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './notFound';

function App() {
  const title = 'Welcome';
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
