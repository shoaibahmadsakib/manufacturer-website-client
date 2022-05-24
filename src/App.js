import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import RequireAuth from "./pages/Authentication/RequireAuth";
import Signin from "./pages/Authentication/Signin";
import SignUp from "./pages/Authentication/SignUp";
import AddItem from "./pages/Dashboard/AddItem";
import AddReview from "./pages/Dashboard/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import UserInfo from "./pages/Dashboard/UserInfo";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About />
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
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="additem" element={<AddItem/>}></Route>
          <Route path="userinfo" element={<UserInfo/>}></Route>
          <Route path="myorder" element={<MyOrders/>}></Route>
          <Route path="addreview" element={<AddReview/>}></Route>
          <Route path="myprofile" element={<MyProfile/>}></Route>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
