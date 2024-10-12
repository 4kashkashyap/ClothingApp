import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";

const Dashboard = ()=>{
    return (
        <div className="font-bold">


            <Header/>

            <Footer/>


            <BrowserRouter>
            <Routes>
            <Route path="/login" Component={<Login/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Dashboard;