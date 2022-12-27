import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import About from './components/about';
import Service from './components/service';
import ServiceDetails from './components/service-details';
import Team from './components/team';
import Faq from './components/faq';
import ComingSoon from './components/coming-soon';
import Error  from './components/404';
import ShopGrid from './components/shop-grid';
import ProductDetails from './components/product-details';
import Contact from './components/contact';
import Cart from './components/cart';
import Checkout from './components/checkout';
import MyAccount from './components/my-account';
import Login from './components/login';
import AddListing from './components/add-listing';
import OrderTracking from './components/order-tracking';



class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
                        {/* <Route path="/home-v2" component={HomeV2} /> */}
                     

                        <Route path="/about" component={About} />
                        <Route path="/service" component={Service} />
                        <Route path="/service-details" component={ ServiceDetails } />
                        <Route path="/team" component={ Team } />
                 
                        <Route path="/faq" component={ Faq } />
                        <Route path="/coming-soon" component={ ComingSoon } />
                        <Route path="/404" component={ Error } />
                 
                        <Route path="/shop-grid" component={ ShopGrid } />
                

                        <Route path="/product-details" component={ ProductDetails } />
                       


                       
                        <Route path="/contact" component={ Contact } />
                        <Route path="/cart" component={ Cart } />
                        <Route path="/checkout" component={ Checkout } />
                        <Route path="/my-account" component={ MyAccount } />
                        <Route path="/login" component={ Login } />
                        <Route path="/add-listing" component={ AddListing } />
                  
                        <Route path="/order-tracking" component={ OrderTracking } />
       
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
