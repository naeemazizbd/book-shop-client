
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router,Switch, Route } 
from "react-router-dom";
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import AddProducts from './components/AddProducts/AddProducts';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import CheckOut from './components/CheckOut/CheckOut';
import Deshboard from './components/Deshboard/Deshboard';
import Orders from './components/Orders/Orders';
import Footer from './components/Footer/Footer';

export const UserContext = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({});
  return (
    <div className=" container">
      <UserContext.Provider value={[loginUser, setLoginUser]}>
        <Router>
          < Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/deshboard">
              <Deshboard />
            </Route>
            <PrivateRoute path="/AddProducts">
              <AddProducts />
            </PrivateRoute>
            <PrivateRoute path="/product/:_id">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <Route to="*">
              <NotMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
