import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import RequireAuth from "./pages/Authentication/RequireAuth";
import Signin from "./pages/Authentication/Signin";
import SignUp from "./pages/Authentication/SignUp";
import AddItem from "./pages/Dashboard/AddItem";
import AddReview from "./pages/Dashboard/ReviewSection/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import UserInfo from "./pages/Dashboard/UserInfo";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from "./pages/ErrorPage";
import MyPortfolio from "./pages/MyPortfolio";

import Blogs from "./pages/Blogs";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageProduct from "./pages/Dashboard/ManageProduct";
import ManageOrder from "./pages/Dashboard/ManageOrder";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blogs />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/placeorder/:id"
          element={
            <RequireAuth>
              <PlaceOrder />
            </RequireAuth>
          }
        ></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/myportfolio" element={<MyPortfolio />}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route path="additem" element={<AddItem/>}></Route>
          <Route path="userinfo" element={<UserInfo/>}></Route>
          <Route path="myorder" element={<MyOrders/>}></Route>
          <Route path="addreview" element={<AddReview/>}></Route>
          <Route path="myprofile" element={<MyProfile/>}></Route>
          <Route path="makeadmin" element={<MakeAdmin/>}></Route>
          <Route path="manageProduct" element={<ManageProduct/>}></Route>
          <Route path="manageOrder" element={<ManageOrder/>}></Route>
        </Route>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
