import React from 'react';
import Profile from './components/user/Profile'
import Wishlist from './components/user/WishlistPage'
import {Switch, Route, Redirect} from 'react-router-dom';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Hello from "./components/hello";
import Product from "./components/home/ProductCategory";
import Dashboard from "./components/user/Dashboard";
import Logout from "./components/user/Logout";
import Home from "./components/home/Home";
import GpuPage from "./components/product/GPU/GpuPage";
import ProductsPage from "./components/product/AllProducts/ProductsPage";
import ProductPage from "./components/product/ProductPage";
import AddProduct from "./components/product/AddProduct";
import UpdateProduct from "./components/product/UpdateProduct";
import NoMatchPage from './components/NoMatchPage';

const Routes = () => (
  <Switch>
    <Route exact path= '/' component={Home}/>
    <Route exact path= '/product' component={Home}/>
    <Route exact path= '/login' component={Login}/>
    <Route exact path= '/register' component={Register}/>
    <PrivateRoute exact path="/gpu" component={GpuPage}/>
    
    {/* Product Pages */}
    <PrivateRoute path="/product/all" component={() => <ProductsPage title = {"All Products"} product_type = "ALL"/>}/>
    <PrivateRoute path="/product/cpu" component={() => <ProductsPage title = {"CPU Products"} product_type = "CPU"/>}/>
    <PrivateRoute path="/product/gpu" component={() => <ProductsPage title = {"GPU Products"} product_type = "GPU"/>}/>
    <PrivateRoute path="/product/ram" component={() => <ProductsPage title = {"RAM Products"} product_type = "RAM"/>}/>
    <PrivateRoute path="/product/new" component={AddProduct}/>
    <PrivateRoute path="/product/:id/update" component = {UpdateProduct}/>
    <PrivateRoute path="/product/:id" component={ProductPage}/>
    
    
    {/* Private Route */}
    <PrivateRoute path="/dashboard" component={Dashboard}/>
    <PrivateRoute path= '/profile' component={Profile}/>
    <PrivateRoute path= '/wishlist' component={Wishlist}/>
    <PrivateRoute path= '/logout' component={Logout}/>

    <Route component={NoMatchPage} />
  </Switch>
)

function PrivateRoute({component: Component, authed, ...rest}) {

  return (
      <Route {...rest} render={(props) => (
          localStorage.getItem('isLoggedIn') === 'true'
              ? <Component {...props} />
              : <Redirect to={{
                  pathname: '/login',
                  state: {from: props.location}
              }}/>
      )}/>

  )
}

export default Routes;
