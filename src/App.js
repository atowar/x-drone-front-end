
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import AddNewProduct from './Components/Pages/AddNewProduct/AddNewProduct';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Home from './Components/Pages/Home/Home';
import MyOrder from './Components/Pages/MyOrder/MyOrder';
import NotFound from './Components/Pages/NotFound/NotFound';
import OrderReceived from './Components/Pages/OrderReceived/OrderReceived';
import Signin from './Components/Pages/Signin/Signin';
import SignUp from './Components/Pages/SignUp/SignUp';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Shared/Footer/Footer';
import FooterBottom from './Components/Shared/FooterBottom/FooterBottom';
import AuthProvider from './Context/AuthProvider';
import ManageOrder from './Components/Pages/ManageOrder/ManageOrder';
import ExploreProducts from './Components/Pages/Home/ExploreProducts/ExploreProducts';
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashborad';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
   
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore-products">
              <ExploreProducts></ExploreProducts>
            </Route>
            <PrivateRoute path="/order-received/:orderId">
              <OrderReceived></OrderReceived>
            </PrivateRoute>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
                    
            <Route path="/about-us">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contact-us">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute path="/add-new-product">
              <AddNewProduct></AddNewProduct>
            </PrivateRoute>
          
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
          <FooterBottom></FooterBottom>
        </Router>
        
      </AuthProvider>
    </div>
  );
}

export default App;
