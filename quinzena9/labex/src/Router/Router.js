import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PageListTrip from "../Pages/PageListTrip/PageListTrip";
import AplicationForm from "../Pages/ApplcationForm/AplicationForm";
import { Login } from "../Pages/Login/Login";
import TripDetails from "../Pages/TripDetails/TripDetails";
import { AdminHome } from "../Pages/AdimHome/AdminHome";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/listTrip"}>
          <PageListTrip />
        </Route>
        <Route exact path={"/formtrip"}>
          <AplicationForm />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/admin"}>
          <AdminHome />
        </Route>
        <Route exact path={"/tripdetail/:id"}>
        </Route>
          <TripDetails />
      </Switch>
    </BrowserRouter>
  );
}
