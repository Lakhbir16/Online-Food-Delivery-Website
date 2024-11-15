import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/nav.jsx"
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import Footer from "./pages/footer.jsx";
import Menu from "./pages/menu.jsx"
import Contact from "./pages/contact.jsx";
import Dashboard from "./pages/Dashboard.jsx"
import Product from "./pages/Product.jsx";
import Additem from "./pages/Additem.jsx"
import Orders from "./pages/Orders.jsx"
import Payment from "./pages/Payment.jsx"
import Users from "./pages/Users.jsx"
import Edit from "./pages/edit.jsx";
import DashScreen from "./pages/dashscreen.jsx";
import Cart from "./pages/viewCart.jsx";
import MyOrder from "./pages/myOrder.jsx";
import Signup from "./pages/signup.jsx"
import Signin from "./pages/signin.jsx"
import PrivateComponent from "./components/privateComponent.jsx"


function App() {
  return (
    < div >
    
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact /> } />

       <Route element={<PrivateComponent/>} >
          <Route path="/cart" element={<Cart/>} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/Dashboard/" element={<Dashboard />} >
             <Route path="all-product" element={<Product />} />
             <Route path="add-item" element={<Additem />} />
             <Route path="orders" element={<Orders />} />
             <Route path="payment" element={<Payment />} />
             <Route path="users" element={<Users />} />
             <Route path="edit/:id" element={<Edit />} />
             <Route path="admin" element={<DashScreen />} />
           </Route>
          </Route>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
