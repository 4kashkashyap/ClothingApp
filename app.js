import Login from "./src/components/Login"
import { createRoot } from "react-dom/client";
import React, { Component } from "react";
import Dashboard from "./src/components/Dashboard";
import { createRouter } from "@remix-run/router";
import path from "path";
import { createBrowserRouter } from "react-router-dom";

const AppLayout = () => {
    return (
        <Dashboard />
    )
}

// const router = createBrowserRouter([
//     {
//         path: "/",
//         Component: <AppLayout/>,
//     }
// ]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<AppLayout/>);